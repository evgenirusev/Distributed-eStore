using System;

namespace DistributedEStore.Services.Products.Dto
{
    public class ProductDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }
        public decimal Price { get; set; }
        public string[] ImageURLs { get; set; }
        public string[] Colors { get; set; }
    }
}