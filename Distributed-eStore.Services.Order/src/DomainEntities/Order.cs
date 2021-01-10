using DistributedEStore.Common.Types;
using System;

namespace DistributedEStore.Services.Products.DomainEntities
{
    public class Product : BaseEntity
    {
        public string Name { get; set; }


        public Product(Guid id, string name, string description, decimal price,
            string category, string[] urls, string[] colors)
            : base(id)
        {
            SetName(name);
            SetDescription(description);
            SetPrice(price);
            SetCategory(category);
            SetImageURLs(urls);
            SetColors(colors);
        }

        public void SetName(string name)
        {
            if (string.IsNullOrEmpty(name))
            {
                throw new DistributedEStoreException("empty_product_name",
                    "Product name cannot be empty.");
            }

            Name = name.Trim().ToLowerInvariant();
            SetUpdatedDate();
        }

        public void SetDescription(string description)
        {
            if (string.IsNullOrEmpty(description))
            {
                throw new DistributedEStoreException("empty_product_description",
                    "Product description cannot be empty.");
            }

            Description = description.Trim();
            SetUpdatedDate();
        }


        public void SetPrice(decimal price)
        {
            if (price <= 0)
            {
                throw new DistributedEStoreException("invalid_product_price",
                    "Product price cannot be zero or negative.");
            }

            Price = price;
            SetUpdatedDate();
        }

        public void SetCategory(string category = "none")
        {
            Category = category;
            SetUpdatedDate();
        }

        public void SetImageURLs(string[] urls)
        {
            ImageURLs = urls;
            SetUpdatedDate();
        }

        public void SetColors(string[] colors)
        {
            Colors = colors;
            SetUpdatedDate();
        }
    }
}
