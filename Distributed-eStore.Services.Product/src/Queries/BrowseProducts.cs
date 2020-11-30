using DistributedEStore.Common.Types;
using DistributedEStore.Services.Products.Dto;

namespace DistributedEStore.Services.Product.Queries
{
    public class BrowseProducts : PagedQueryBase, IQuery<PagedResult<ProductDto>>
    {
        public decimal PriceFrom { get; set; }
        public decimal PriceTo { get; set; } = decimal.MaxValue;
    }
}
