using DistributedEStore.Common.Types;
using DistributedEStore.Services.Products.Dto;

namespace DistributedEStore.Services.Product.Queries
{
    public class BrowseProducts : PagedQueryBase, IQuery<PagedResult<ProductDto>>
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