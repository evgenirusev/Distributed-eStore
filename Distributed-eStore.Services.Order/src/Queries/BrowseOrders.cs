using DistributedEStore.Services.Order.Dto;
using DistributedEStore.Common.Types;

namespace DistributedEStore.Services.Orders.Queries
{
    public class BrowseOrders : PagedQueryBase, IQuery<PagedResult<OrderDto>> 
    {
    }
}