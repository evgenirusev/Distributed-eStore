using System;

namespace DistributedEStore.Common.Models
{
	public class OrderItem
	{
		public Guid ProductId { get; set; }
		public int Quantity { get; set; }
		public string Size { get; set; }
	}
}
