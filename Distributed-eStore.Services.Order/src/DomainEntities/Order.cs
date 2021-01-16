using DistributedEStore.Common.Types;
using System;

namespace DistributedEStore.Services.Orders.DomainEntities
{
    public class Order : BaseEntity
    {
        public Guid CustomerId { get; set; }
        public OrderItem[] OrderItems { get; set; }

        public Order(Guid id, Guid customerId, OrderItem[] orderItems)
            : base(id)
        {
            SetCustomerId(customerId);
            SetOrderItems(orderItems);
        }

        public void SetCustomerId(Guid customerId)
        {
            CustomerId = customerId;
            SetUpdatedDate();
        }

        public void SetOrderItems(OrderItem[] orderItems)
        {
            if (orderItems.Length < 1)
            {
                throw new DistributedEStoreException("invalid_orderItems_quantity", "Order items quantity cannot be zero or negative.");
            }

            OrderItems = orderItems;
            SetUpdatedDate();
        }
    }
}