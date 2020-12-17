using DistributedEStore.Common.Models.Products;

namespace DistributedEStore.Common.Queries
{
    public class BrowseProducts
    {
        public string Category { get; set; }
        public decimal PriceFrom { get; set; }
        public decimal PriceTo { get; set; }

        public BrowseProducts()
        {
            Category = "none";
            PriceFrom = 0;
            PriceTo = decimal.MaxValue;
        }
    }
}