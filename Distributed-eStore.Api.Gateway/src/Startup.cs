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
using DistributedEStore.Common.Authentication;

namespace DistributedEStore.Api.Gateway
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy", cors =>
                        cors.AllowAnyOrigin()
                            .AllowAnyMethod()
                            .AllowAnyHeader()
                            .AllowCredentials());
            });

            using (var serviceProvider = services.BuildServiceProvider())
            {
                var configuration = serviceProvider.GetService<IConfiguration>();
                services.Configure<AppOptions>(configuration.GetSection("app"));
            }

            services.AddSingleton<Common.Mvc.IServiceId, ServiceId>();
            services.AddTransient<IStartupInitializer, StartupInitializer>();
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddJwt();
            services.AddAuthorization(x => x.AddPolicy("admin", p => p.RequireRole("admin")));

            services.AddConsul();
            services.AddControllers();
            services.AddOpenTracing();
            services.RegisterServiceForwarder<IProductsService>("products-service");
        }
        
        public void ConfigureContainer(ContainerBuilder builder)
        {
            builder.RegisterAssemblyTypes(Assembly.GetEntryAssembly())
                    .AsImplementedInterfaces();
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
            app.UseAuthentication();

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
