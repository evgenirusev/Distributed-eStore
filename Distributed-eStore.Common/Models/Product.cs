using System;

namespace DistributedEStore.Common.Models.Products
{
    public class Product
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public Category Category { get; set; }
        public decimal Price { get; set; }
        public string[] ImageURLs { get; set; }
        public string[] Colors { get; set; }
    }

    public enum Category
    {
        Male,
        Female,
        All,
        None
    }
}
