using DistributedEStore.Common.Consul;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using DistributedEStore.Common.RestEase;
using DistributedEStore.Api.Services;
using System.Reflection;
using Autofac;
using DistributedEStore.Common.RabbitMq;
using DistributedEStore.Common.Dispatchers;
using DistributedEStore.Common.Mvc;
using DistributedEStore.Common;
using Consul;
using Microsoft.Extensions.Hosting;
using Microsoft.AspNetCore.Http;

namespace DistributedEStore.Api.Gateway
{
    public class Startup
    {
        private static readonly string[] Headers = new[] { "X-Operation", "X-Resource", "X-Total-Count" };
        // note - remove this later on
        private IServiceCollection services;

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            // note - removed this because it caused some arbitrary run-time issue
            //services.AddCustomMvc();
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy", cors =>
                        cors.AllowAnyOrigin()
                            .AllowAnyMethod()
                            .AllowAnyHeader()
                            .AllowCredentials()
                            .WithExposedHeaders(Headers));
            });

            using (var serviceProvider = services.BuildServiceProvider())
            {
                var configuration = serviceProvider.GetService<IConfiguration>();
                services.Configure<AppOptions>(configuration.GetSection("app"));
            }

            services.AddSingleton<Common.Mvc.IServiceId, ServiceId>();
            services.AddTransient<IStartupInitializer, StartupInitializer>();
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

            services.AddConsul();
            services.AddControllers();
            services.AddOpenTracing();
            services.RegisterServiceForwarder<IProductsService>("products-service");
            // note - remove this later on
            this.services = services;
        }
        
        public void ConfigureContainer(ContainerBuilder builder)
        {
            builder.RegisterAssemblyTypes(Assembly.GetEntryAssembly())
                    .AsImplementedInterfaces();
            // note - removed because kestrel exception
            // additional note - added it and stopped receiving kestrel issue
            // but then another issue popped up with the addcontrollers being registered exception
            // builder.Populate(services);
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

            app.UseRouting();
            app.UseEndpoints(routes =>
            {
                routes.MapControllers();
            });

            startupInitializer.InitializeAsync();
        }
    }
}
