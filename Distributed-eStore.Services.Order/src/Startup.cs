using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Autofac;
using Consul;
using DistributedEStore.Common;
using DistributedEStore.Common.Consul;
using DistributedEStore.Common.Dispatchers;
using DistributedEStore.Common.Mongo;
using DistributedEStore.Common.Mvc;
using DistributedEStore.Common.RabbitMq;
using System.Reflection;
using DistributedEStore.Common.Messages.Orders;

namespace DistributedEStore.Order
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
            services.AddCustomMvc();
            services.AddConsul();
            services.AddControllers();
            services.AddOpenTracing();
            services.AddInitializers(typeof(IMongoDbInitializer));
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy", cors =>
                        cors.AllowAnyOrigin()
                            .AllowAnyMethod()
                            .AllowAnyHeader());
            });
        }

        public void ConfigureContainer(ContainerBuilder builder)
        {
            builder.RegisterAssemblyTypes(Assembly.GetEntryAssembly())
                    .AsImplementedInterfaces();
            builder.AddMongo();
            builder.AddMongoRepository<Services.Products.DomainEntities.Order>("Orders");
            builder.AddRabbitMq();
            builder.AddDispatchers();
        }

        public void Configure(IApplicationBuilder app, IStartupInitializer startupInitializer,
            IConsulClient client, IHostApplicationLifetime applicationLifetime)
        {
            app.UseCors("CorsPolicy");
            app.UseAllForwardedHeaders();
            app.UseHttpsRedirection();
            app.UseErrorHandler();
            app.UseServiceId();
            app.UseRabbitMq().SubscribeCommand<CreateOrder>();

            app.UseRouting();
            app.UseEndpoints(routes =>
            {
                routes.MapControllers();
            });

            var consulServiceId = app.UseConsul();
            applicationLifetime.ApplicationStopped.Register(() =>
            {
                client.Agent.ServiceDeregister(consulServiceId);
            });

            startupInitializer.InitializeAsync();
        }
    }
}