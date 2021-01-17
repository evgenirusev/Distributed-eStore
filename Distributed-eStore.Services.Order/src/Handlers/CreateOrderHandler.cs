using DistributedEStore.Common.Handlers;
using DistributedEStore.Common.RabbitMq;
using System.Threading.Tasks;
using DistributedEStore.Common.Types;
using DistributedEStore.Services.Orders.Repositories;
using DistributedEStore.Common.Messages.Orders;
using System;

namespace DistributedEStore.Services.Orders.Handlers
{
    public sealed class CreateOrderHandler : ICommandHandler<CreateOrder>
    {
        private readonly IOrdersRepository _ordersRepository;

        public CreateOrderHandler(IOrdersRepository ordersRepository)
        {
            _ordersRepository = ordersRepository;
        }

        public async Task HandleAsync(CreateOrder command, ICorrelationContext context)
        {
            var order = new DomainEntities.Order(command.Id, command.CustomerId, MapToOraderItems(command.OrderItems));
            await _ordersRepository.AddAsync(order);
        }

        private DomainEntities.OrderItem[] MapToOraderItems(OrderItem[] requestOrderItems)
        {
            int itemsCount = requestOrderItems.Length;
            var orderItems = new DomainEntities.OrderItem[itemsCount];

            for (int i = 0; i < itemsCount; i++)
            {
                var currentItem = requestOrderItems[i];
                orderItems[i] = new DomainEntities.OrderItem(new Guid(),
                    currentItem.ProductId, currentItem.Quantity, currentItem.Size);
            }

            return orderItems;
        }
    }
}