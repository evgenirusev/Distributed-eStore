using DistributedEStore.Api.Gateway.Models.Products;

namespace DistributedEStore.Api.Queries
{
    public class BrowseProducts
    {
        public Category Category { get; set; }
        public decimal PriceFrom { get; set; }
        public decimal PriceTo { get; set; }

        public BrowseProducts()
        {
            PriceTo = decimal.MaxValue;
        }
    }
}