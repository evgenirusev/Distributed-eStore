using DistributedEStore.Common.Types;
using DistributedEStore.Services.Order.Dto;

namespace DistributedEStore.Services.Orders.Queries
{
    public class BrowseOrders : PagedQueryBase, IQuery<PagedResult<OrderDto>> { }
}