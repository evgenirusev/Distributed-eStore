using Autofac;
using Autofac.Extensions.DependencyInjection;
using Consul;
using DistributedEStore.Common;
using DistributedEStore.Common.Consul;
using DistributedEStore.Common.Dispatchers;
using DistributedEStore.Common.Mvc;
using DistributedEStore.Common.RabbitMq;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System.Reflection;

namespace DistributedEStore.Services.Product
{
    public class Startup
    {
        private IServiceCollection services;

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCustomMvc();
            services.AddConsul();
            services.AddControllers();
            // ConfigureContainer depends on this (temporary hack for Autofac)
            // services.AddMvc(options => options.EnableEndpointRouting = false);
            this.services = services;
        }

        // has hidden dependency anti pattern - this.services must be set from ConfigureServices
        public void ConfigureContainer(ContainerBuilder builder)
        {
            builder.RegisterAssemblyTypes(Assembly.GetEntryAssembly())
                    .AsImplementedInterfaces();
            // note - removed this because of kestrel exception
            // builder.Populate(services);
            builder.AddRabbitMq();
            builder.AddDispatchers();
        }

        public void Configure(IApplicationBuilder app, IStartupInitializer startupInitializer,
            IConsulClient client, IHostApplicationLifetime applicationLifetime)
        {
            app.UseAllForwardedHeaders();
            app.UseHttpsRedirection();
            app.UseErrorHandler();

            // app.UseMvc();
            app.UseRouting();

            app.UseEndpoints(routes =>
            {
                routes.MapControllers();
            });

            // note - subscribe for commands
            app.UseRabbitMq();
            app.UseServiceId();

            var consulServiceId = app.UseConsul();
            applicationLifetime.ApplicationStopped.Register(() =>
            {
                client.Agent.ServiceDeregister(consulServiceId);
            });

            startupInitializer.InitializeAsync();
        }
    }
}
