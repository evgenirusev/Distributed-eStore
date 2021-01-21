using DistributedEStore.Services.Product.Queries;
using DistributedEStore.Services.Products.Repositories;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using System.Collections.Generic;

namespace DistributedEStore.Services.Product.Seed
{
    public static class ProductsSeeder
    {
        public async static void SeedProductsAsync(this IApplicationBuilder app)
        {
            var productsRepository = app.ApplicationServices.GetRequiredService<IProductsRepository>();

            var existingProducts = productsRepository.BrowseAsync(new BrowseProducts() {
                Category = "female"
            });

            if (existingProducts.Result.IsEmpty)
            {
                foreach (var product in GetProducts())
                {
                    await productsRepository.AddAsync(product);
                }
            }
        }

        static IEnumerable<Products.DomainEntities.Product> GetProducts()
        {
            return new List<Products.DomainEntities.Product>()
            {
                new Products.DomainEntities.Product(
                    new System.Guid("3c44a13b-b00f-47e6-85d4-ccd42f60a650"),
                    "The Womens Responsible Flannel",
                    "Cloud nine soft. Our signature brushed organic and recycled blend is a fall staple you won't want to take off. 59% organic cotton, 39% recycled polyester, 2% spandex. Machine wash. 6.8oz brushed flannel, Point collar with full front corozo button placket, Long sleeves with adjustable button cuffs, Double chest pockets",
                    50,
                    "female",
                    new string[] { "https://i.ibb.co/pyjTPBh/672423-E2-2-ECD-4946-AFB8-941-B2-BF4258-F-64-ABA173-1-AC0-4663-9-C64-6-BC1-F974-BC32-large.jpg", "https://i.ibb.co/1MJB3DR/0-Z0-A3519-large.jpg", "https://i.ibb.co/n6ZN7mj/holidaylifestyle-web327-large.jpg" },
                    new string[] { "#D2A8B0", "#55552E", "#6A95C1" }),

                new Products.DomainEntities.Product(
                    new System.Guid("90fcc119-5038-4cd1-994f-5cd216951ca1"),
                    "Organic Cotton Crew Sweater",
                    "The ultimate sweat pant for ultimate comfort (aka your daily work-from-home uniform). Made from signuture Eco-Fleece, this pant features tailored pockets and a tapered leg opening.",
                    90,
                    "female",
                    new string[] { "https://i.ibb.co/pZpFr1R/AA-Fleece-Blk-2-large.jpg", "https://i.ibb.co/4f5fJF8/AA-Fleece-Grey-1-large.webp"},
                    new string[] { "#2D2C33", "#868588" }),

                new Products.DomainEntities.Product(
                    new System.Guid("6cac50c2-7e31-43e2-a4fd-98238a6820ad"),
                    "Recycled Cotton Cardigan",
                    "A cozy, perfectly-oversized cardigan that's made for lounging around or dressing up. Made from 100% recycled cotton (meaning it was once fabric on the cutting room floor).",
                    60,
                    "female",
                    new string[] { "https://i.ibb.co/w7Y2Ch4/F20lifestyle1103-large.jpg", "https://i.ibb.co/GPM6NSy/F20lifestyle1095-large.jpg"},
                    new string[] { "#2D2C33", "#868588" }),

                new Products.DomainEntities.Product(
                    new System.Guid("b2f06079-4004-4959-964d-e8839fc9162c"),
                    "The Women's Bison Ultralight",
                    "A cozy, perfectly-oversized cardigan that's for lounging around or dressing up. Made from 100% recycled cotton (meaning it was once fabric on the cutting room floor).",
                    100,
                    "female",
                    new string[] { "https://i.ibb.co/SyfLRCK/F20lifestyle1015-large.jpg", "https://i.ibb.co/crSqGBK/F20lifestyle902-large.jpg"},
                    new string[] { "#E40B27", "#C29681" }),

                new Products.DomainEntities.Product(
                    new System.Guid("6429a58c-c45a-4dec-9f66-bf388f8637a8"),
                    "Women's Organic Cotton Crew Sweater",
                    "A cozy, perfectly-oversized cardigan that's made for lounging or dressing up. Made from 100% recycled cotton (meaning it was once fabric on the cutting room floor).",
                    100,
                    "female",
                    new string[] { "https://i.ibb.co/fpdW7vv/F20lifestyle1006-large.jpg", "https://i.ibb.co/BcSVgwT/EM6-A1563-large.jpg", "https://i.ibb.co/9V52Bpw/w-albright-wine16871-large.jpg"},
                    new string[] { "#FFF", "black", "#85333A" }),

                new Products.DomainEntities.Product(
                    new System.Guid("0ebcfbc8-1bf9-433a-8191-8cace32af36c"),
                    "Women's Recycled Rain Shell",
                    "Cloud nine soft. Our signature brushed organic and recycled blend is a fall staple won't want to take off. 59% organic cotton, 39% recycled polyester, 2% spandex. Machine wash. 6.8oz brushed flannel, Point collar with full front corozo button placket, Long sleeves with adjustable button cuffs, Double chest pockets",
                    70,
                    "female",
                    new string[] { "https://i.ibb.co/4MQhG9K/holidaylifestyle-web279-x500.jpg", "https://i.ibb.co/jZkyYmK/w-bisonultralight0300-800x.jpg" },
                    new string[] { "#D2A8B0", "#55552E" }),

                new Products.DomainEntities.Product(
                    new System.Guid("001b0bcc-18c5-4fcd-91dc-ec787215aeee"),
                    "Women's Eco-Fleece Joggers",
                    "The ultimate sweat pant for ultimate comfort (aka your daily work-from-home uniform). Made from signature Eco-Fleece, this pant features tailored pockets.",
                    90,
                    "female",
                    new string[] { "https://i.ibb.co/VQBf0wz/F20lifestyle594-large.jpg", "https://i.ibb.co/Xsh82jQ/holidaylifestyle-web410-x500.jpg"},
                    new string[] { "#2D2C33", "#868588" }),

                new Products.DomainEntities.Product(
                    new System.Guid("b6665d4d-5692-48e5-b65c-010ee05cfede"),
                    "Women's Eco-Fleece Jogger Pants",
                    "The ultimate sweat pant for ultimate comfort (aka your daily work-from-home uniform). Made from signature Eco-Fleece, this pant features tailored pockets and a tapered leg opening.",
                    90,
                    "female",
                    new string[] { "https://i.ibb.co/0jGjXJ1/F20lifestyle1082-large.jpg", "https://i.ibb.co/928cGsz/holidaylifestyle-web159-large.jpg"},
                    new string[] { "#E40B27", "#C29681" }),
            };
        }
    }
}
