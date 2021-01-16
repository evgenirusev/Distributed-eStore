using System;
using System.Text.Json.Serialization;

namespace DistributedEStore.Common.Models
{
    public class CreateOrder
    {
		public string CustomerId { get; set; }
		public OrderItems[] OrderItems { get; set; }

		[JsonConstructor]
		public CreateOrder(string customerId, OrderItems[] orderItems)
		{
			CustomerId = customerId;
			OrderItems = orderItems;
		}
	}
}