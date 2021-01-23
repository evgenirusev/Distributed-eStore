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

                //new Products.DomainEntities.Product(
                //    new System.Guid("b6665d4d-5692-48e5-b65c-010ee05cfede"),
                //    "Women's Eco-Fleece Jogger Pants",
                //    "The ultimate sweat pant for ultimate comfort (aka your daily work-from-home uniform). Made from signature Eco-Fleece, this pant features tailored pockets and a tapered leg opening.",
                //    90,
                //    "female",
                //    new string[] { "https://i.ibb.co/0jGjXJ1/F20lifestyle1082-large.jpg", "https://i.ibb.co/928cGsz/holidaylifestyle-web159-large.jpg"},
                //    new string[] { "#E40B27", "#C29681" }),

                new Products.DomainEntities.Product(
                    new System.Guid("be143681-5563-46ed-9623-1b6a45e8898c"),
                    "Men's EcoKnit™ Striped Pocket Tee",
                    "Cloud nine soft. Our signature brushed organic and recycled blend is a fall staple you won't want to take off. 59% organic cotton, 39% recycled polyester, 2% spandex. Machine wash. 6.8oz brushed flannel, Point collar with full front corozo button placket, Long sleeves with adjustable button cuffs, Double chest pockets",
                    50,
                    "male",
                    new string[] { "https://i.ibb.co/272Z0cS/F20-Select-23-large.jpg", "https://i.ibb.co/M5zrZh3/101-171-134-pockettee-midnight6080-large.jpg", "" },
                    new string[] { "#D2A8B0", "#55552E" }),

                new Products.DomainEntities.Product(
                    new System.Guid("fd94220b-b12c-4eb7-8eb2-951496420830"),
                    "Men's EcoKnit™ Pocket Tee",
                    "The ultimate sweat pant for ultimate comfort (aka your daily work-from-home uniform). Made from signuture Eco-Fleece, this pant features tailored pockets and a tapered leg opening.",
                    90,
                    "male",
                    new string[] { "https://i.ibb.co/qFYgKBX/101-176-057-alldaychambraylsbuttondown-seagreen7787-47c65862-479d-4005-a68b-057ad3bc25b6-large.jpg", "https://i.ibb.co/qCd3V8w/101-176-031-alldaychambraylsbuttondown-jackalope8338-f703e273-ed45-43ba-9719-d72218b0a6fd-large.jpg" },
                    new string[] { "#2D2C33", "#868588" }),

                new Products.DomainEntities.Product(
                    new System.Guid("9dea70cc-c678-4dfe-86d0-0f90ee478c21"),
                    "Recycled Cotton Cardigan",
                    "A cozy, perfectly-oversized cardigan that's made for lounging around or dressing up. Made from 100% recycled cotton (meaning it was once fabric on the cutting room floor).",
                    60,
                    "male",
                    new string[] { "https://i.ibb.co/64Pbwdr/EM6-A1659-large.jpg", "https://i.ibb.co/4812g3C/EM6-A1170-large.jpg", "https://i.ibb.co/mBMKsym/EM6-A0253-large.jpg" },
                    new string[] { "#FFF", "black", "#85333A" }),

                new Products.DomainEntities.Product(
                    new System.Guid("8af3ef70-2bf8-41be-ae96-0fd908b15e98"),
                    "The Men's Bison Ultralight",
                    "A cozy, perfectly-oversized cardigan that's for lounging around or dressing up. Made from 100% recycled cotton (meaning it was once fabric on the cutting room floor).",
                    100,
                    "male",
                    new string[] { "https://i.ibb.co/mchbcHv/F20-SMS2971-Edit-large.jpg", "https://i.ibb.co/QDzXZGY/F20lifestyle525-large.jpg" },
                    new string[] { "#D2A8B0", "#55552E" }),

                new Products.DomainEntities.Product(
                    new System.Guid("afd2d45d-d224-487e-af22-ed64534de258"),
                    "The Men's Responsible Flannel",
                    "A cozy, perfectly-oversized cardigan that's made for lounging or dressing up. Made from 100% recycled cotton (meaning it was once fabric on the cutting room floor).",
                    100,
                    "male",
                    new string[] { "https://i.ibb.co/W5MYxjp/F20lifestyle1049-large.jpg", "https://i.ibb.co/wB9xYnd/F20lifestyle1183-large.jpg" },
                    new string[] { "#2D2C33", "#868588" }),

                new Products.DomainEntities.Product(
                    new System.Guid("ad23f3aa-77ca-4ffb-b377-97667a9b5ac4"),
                    "Organic Plaid Button Down",
                    "Cloud nine soft. Our signature brushed organic and recycled blend is a fall staple won't want to take off. 59% organic cotton, 39% recycled polyester, 2% spandex. Machine wash. 6.8oz brushed flannel, Point collar with full front corozo button placket, Long sleeves with adjustable button cuffs, Double chest pockets",
                    70,
                    "male",
                    new string[] { "https://i.ibb.co/mchbcHv/F20-SMS2971-Edit-large.jpg", "https://i.ibb.co/hH6zYvr/Mens-Pocket-Tee-Blue-1-large.jpg" },
                    new string[] { "#E40B27", "#C29681" }),

                new Products.DomainEntities.Product(
                    new System.Guid("cb800072-97da-49a8-85db-f830603c69ed"),
                    "Organic Canvas Work Pant",
                    "The ultimate sweat pant for ultimate comfort (aka your daily work-from-home uniform). Made from signature Eco-Fleece, this pant features tailored pockets.",
                    90,
                    "male",
                    new string[] { "https://i.ibb.co/Sy9RSXh/F20-Apparel-34-large.jpg", "https://i.ibb.co/p3GCDFn/101-177-031-alldaychambraylsbuttondown-bouldergrey7465-large.jpg", "https://i.ibb.co/3dt0zB8/200121-UBB-02984-edited-Pixlr-1-2fd437ea-a15e-4e24-8b06-248402461d93-large.jpg" },
                    new string[] { "#D2A8B0", "#55552E", "#6A95C1" }),

                new Products.DomainEntities.Product(
                    new System.Guid("0069bf80-fbf4-4ef7-bf38-814620349f30"),
                    "Organic Cotton Crew Sweater",
                    "The ultimate sweat pant for ultimate comfort (aka your daily work-from-home uniform). Made from signature Eco-Fleece, this pant features tailored pockets and a tapered leg opening.",
                    90,
                    "male",
                    new string[] { "https://i.ibb.co/QDzXZGY/F20lifestyle525-large.jpg", "https://i.ibb.co/vYzXNmk/F20lifestyle1047-3a811f5c-9f8e-4b3c-ade3-e39a6163f5e3-large.jpg" },
                    new string[] { "#2D2C33", "#868588" }),



































                new Products.DomainEntities.Product(
                    new System.Guid("3a1794d5-28bb-448a-ab00-53b27f15e3ba"),
                    "Pocket Pouch",
                    "Made from recycled plastic bottles, 100% vegan, water-resistant, and stain resistant.",
                    10,
                    "accessories",
                    new string[] { "https://i.ibb.co/QNpGrGS/Missing-F20-II-36-large.jpg", "https://i.ibb.co/RhPR08T/Missing-F20-II-38-large.jpg" },
                    new string[] { "#7984a0", "#4C6992" }),

                new Products.DomainEntities.Product(
                    new System.Guid("a76d3fcc-c53d-4d52-9570-7e79d120144c"),
                    "Men's EcoKnit™ Pocket Tee",
                    "The ultimate sweat pant for ultimate comfort (aka your daily work-from-home uniform). Made from signuture Eco-Fleece, this pant features tailored pockets and a tapered leg opening.",
                    90,
                    "accessories",
                    new string[] { "https://i.ibb.co/kS4PYSz/F20-SMS16921-Edit-20608b16-220c-46d0-bcfa-dc5961496d79-large.jpg", "https://i.ibb.co/WtjzfDg/F20-SMS3359-large.jpg", "https://i.ibb.co/XWdvTSd/bisonbaseballhat-706-004-01013-1-large.jpg" },
                    new string[] { "#E34226", "#EAB172", "#48454A" }),

                new Products.DomainEntities.Product(
                    new System.Guid("340d57f8-9ed5-433b-b486-6a2441560538"),
                    "Recycled Cotton Cardigan",
                    "A cozy, perfectly-oversized cardigan that's made for lounging around or dressing up. Made from 100% recycled cotton (meaning it was once fabric on the cutting room floor).",
                    60,
                    "accessories",
                    new string[] { "https://i.ibb.co/8sQm9v8/814-093-06313-thestrawkit-olive3-large.jpg", "https://i.ibb.co/9prM5Tp/814-093-15713-thestrawkit-mustard3-large.jpg" },
                    new string[] { "black", "#85333A" }),

                new Products.DomainEntities.Product(
                    new System.Guid("05f5c4f2-8636-4573-b03e-0e940e8dfcbc"),
                    "The Men's Bison Ultralight",
                    "A cozy, perfectly-oversized cardigan that's for lounging around or dressing up. Made from 100% recycled cotton (meaning it was once fabric on the cutting room floor).",
                    30,
                    "accessories",
                    new string[] { "https://i.ibb.co/9prM5Tp/814-093-15713-thestrawkit-mustard3-large.jpg", "https://i.ibb.co/8sQm9v8/814-093-06313-thestrawkit-olive3-large.jpg" },
                    new string[] { "#073266", "#D99C06" }),

                new Products.DomainEntities.Product(
                    new System.Guid("859a0533-3a2b-4cfd-bac9-c509f88785ba"),
                    "The Slip-On - Honey Rubber Sole",
                    "A cozy, perfectly-oversized cardigan that's made for lounging or dressing up. Made from 100% recycled cotton (meaning it was once fabric on the cutting room floor).",
                    100,
                    "accessories",
                    new string[] { "https://i.ibb.co/z5ckBVw/Glerups-Slip-Grey-LS-2-large.jpg", "https://i.ibb.co/TW6sRD6/Glerups-Slip-Forest-1-large.jpg" },
                    new string[] { "#2D2C33", "#868588" }),

                new Products.DomainEntities.Product(
                    new System.Guid("e22bf7e3-d559-4166-a933-da9442a9a496"),
                    "Organic Plaid Button Down",
                    "Cloud nine soft. Our signature brushed organic and recycled blend is a fall staple won't want to take off. 59% organic cotton, 39% recycled polyester, 2% spandex. Machine wash. 6.8oz brushed flannel, Point collar with full front corozo button placket, Long sleeves with adjustable button cuffs, Double chest pockets",
                    70,
                    "accessories",
                    new string[] { "https://i.ibb.co/7Q1cVwb/Missing-F20-II-72-946fbd7c-021f-459f-9cfb-253ae64bc7cf-large.jpg", "https://i.ibb.co/NYsGq0W/Bison-Beanie-large.jpg" },
                    new string[] { "#E40B27", "#C29681" }),

                new Products.DomainEntities.Product(
                    new System.Guid("3a4d1ac4-7ac3-4dba-8baf-0c21f1226fbe"),
                    "Organic Canvas Work Pant",
                    "The ultimate sweat pant for ultimate comfort (aka your daily work-from-home uniform). Made from signature Eco-Fleece, this pant features tailored pockets.",
                    90,
                    "accessories",
                    new string[] { "https://i.ibb.co/qC4zWmm/SP20-ACC-10-copy-2-edited-Pixlr-large.jpg", "https://i.ibb.co/hLCQKWx/F20-SMS3534-800x.jpg" },
                    new string[] { "#CF733A", "blue" }),
            };
        }
    }
}
