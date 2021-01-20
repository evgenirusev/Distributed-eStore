using DistributedEStore.Common.Handlers;
using DistributedEStore.Common.Types;
using DistributedEStore.Services.Order.Dto;
using DistributedEStore.Services.Orders.Queries;
using DistributedEStore.Services.Orders.Repositories;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace DistributedEStore.Services.Orders.Handlers
{
    public sealed class BrowseOrdersHandler : IQueryHandler<BrowseOrders, PagedResult<OrderDto>>
    {
        private readonly IOrdersRepository _ordersRepository;

        public BrowseOrdersHandler(IOrdersRepository ordersRepository)
            => _ordersRepository = ordersRepository;

        public async Task<PagedResult<OrderDto>> HandleAsync(BrowseOrders query)
        {
            // todo: implement
            //var result = await _ordersRepository.GetAllAsync();
            //var orders = result.Select(o => new OrderDto
            //{
            //    OrderItems = o.OrderItems.Select(orderItem => new OrderItemDto
            //    {
            //    })
            //}).ToList();

            throw new NotImplementedException();
        }
    }
}