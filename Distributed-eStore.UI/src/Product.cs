using System;

namespace DistributedEStore.UI
{
    public class Product
    {
        public Guid ID { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public double Price { get; set; }
        public string[] Colors { get; set; }
        public string[] ImageURLs { get; set; }
    }
}
