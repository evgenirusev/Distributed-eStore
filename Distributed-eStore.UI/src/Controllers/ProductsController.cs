using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace DistributedEStore.UI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductsController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<Product> Get()
        {
            var id = new Guid("7f4c6b1a-f865-4c0f-8d95-090f403322e4");
            var name = "Test name name";
            var description = "test";
            var price = 3.14;
            string[] colors = { "red", "green" };
            string[] imageURLs = { "red", "green" };

            Product[] products = { 
                new Product { Name = name, Colors = colors, Description = description, ID = id, ImageURLs = imageURLs, Price = price },
                new Product { Name = name, Colors = colors, Description = description, ID = id, ImageURLs = imageURLs, Price = price }
            };

            return products;
        }
    }
}
