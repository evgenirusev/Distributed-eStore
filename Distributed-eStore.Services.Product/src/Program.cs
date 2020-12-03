using Autofac.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using System.IO;

namespace DistributedEStore.Services.Product
{
    public class Program
    {
        public static void Main(string[] args)
        {
            //CreateHostBuilder(args)
            //    .UseServiceProviderFactory(new AutofacServiceProviderFactory())
            //    .Build()
            //    .Run();

            var host = Host.CreateDefaultBuilder(args)
                   .UseServiceProviderFactory(new AutofacServiceProviderFactory())
                   .ConfigureWebHostDefaults(webHostBuilder => {
                       webHostBuilder
                        .UseContentRoot(Directory.GetCurrentDirectory())
                        .UseIISIntegration()
                        .UseStartup<Startup>();
                   })
                   .Build();

            host.Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
