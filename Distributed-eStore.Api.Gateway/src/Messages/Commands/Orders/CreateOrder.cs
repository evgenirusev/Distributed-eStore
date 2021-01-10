using DistributedEStore.Common.Messages;
using System;
using System.Text.Json.Serialization;

namespace DistributedEStore.Api.Gateway.Messages.Commands.Orders
{
	[MessageNamespace("orders")]
	public class CreateOrder : ICommand
	{
		public Guid Id { get; set; }
		public Guid CustomerId { get; set; }
		public OrderItem[] OrderItems { get; set; }

		[JsonConstructor]
		public CreateOrder(Guid id, Guid customerId, OrderItem[] orderItems)
		{
			Id = id;
			CustomerId = customerId;
			OrderItems = orderItems;
		}
	}
	
	public class OrderItem
    {
		public Guid ProductId { get; set; }
		public int Quantity { get; set; }
		public string Size { get; set; }
	}
}
