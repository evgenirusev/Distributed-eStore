using DistributedEStore.Common.Consul;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using DistributedEStore.Common.RestEase;
using DistributedEStore.Api.Services;
using System.Reflection;
using Autofac;
using Autofac.Extensions.DependencyInjection;
using DistributedEStore.Common.RabbitMq;
using DistributedEStore.Common.Dispatchers;
using System;
using DistributedEStore.Common.Mvc;
using DistributedEStore.Common;
using Consul;
using Microsoft.Extensions.Hosting;
using System.Net.Http;
using System.Text;
using System.Net;
using System.IO;

namespace DistributedEStore.Api.Gateway
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
            services.RegisterServiceForwarder<IProductsService>("products-service");
            this.services = services;
        }

        public void ConfigureContainer(ContainerBuilder builder)
        {
            builder.RegisterAssemblyTypes(Assembly.GetEntryAssembly())
                    .AsImplementedInterfaces();
            builder.Populate(services);
            builder.AddRabbitMq();
            builder.AddDispatchers();
        }

        public void Configure(IApplicationBuilder app, IStartupInitializer startupInitializer,
            IConsulClient client, IHostApplicationLifetime applicationLifetime)
        {
            app.UseHttpsRedirection();
            app.UseRabbitMq();
            app.UseAllForwardedHeaders();
            app.UseServiceId();

            var consulServiceId = app.UseConsul();
            applicationLifetime.ApplicationStopped.Register(() => 
            { 
                client.Agent.ServiceDeregister(consulServiceId);
            });

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            startupInitializer.InitializeAsync();
        }
    }
}
