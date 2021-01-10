using System;

namespace DistributedEStore.Common.Models
{
    public class CreateOrder
    {
		public Guid CustomerId { get; set; }
		public OrderItem[] OrderItems { get; set; }

		public CreateOrder(Guid customerId, OrderItem[] orderItems)
		{
			CustomerId = customerId;
			OrderItems = orderItems;
		}
	}
}