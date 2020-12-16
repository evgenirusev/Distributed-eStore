using DistributedEStore.Common.Models.Products;

namespace DistributedEStore.Api.Queries
{
    public class BrowseProducts
    {
        public Category Category { get; set; }
        public decimal PriceFrom { get; set; }
        public decimal PriceTo { get; set; }

        public BrowseProducts(Category category = Category.None, decimal priceFrom = 0, decimal priceTo = decimal.MaxValue)
        {
            Category = category;
            PriceFrom = priceFrom;
            PriceTo = priceTo;
        }
    }
}