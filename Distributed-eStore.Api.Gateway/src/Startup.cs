using DistributedEStore.Common.Consul;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
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

namespace DistributedEStore.Api.Gateway
{
    public class Startup
    {
        public IContainer Container { get; private set; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;  
        }

        public IConfiguration Configuration { get; }

        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            services.AddCustomMvc();
            services.AddConsul();
            services.AddControllers();

            services.RegisterServiceForwarder<IProductsService>("products-service");

            var builder = new ContainerBuilder();
            builder.RegisterAssemblyTypes(Assembly.GetEntryAssembly())
                    .AsImplementedInterfaces();
            builder.Populate(services);
            builder.AddRabbitMq();
            builder.AddDispatchers();

            Container = builder.Build();
            return new AutofacServiceProvider(Container);
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
                Container.Dispose(); 
            });

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            startupInitializer.InitializeAsync();
        }
    }
}
