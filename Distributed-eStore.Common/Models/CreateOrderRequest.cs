namespace DistributedEStore.Common.Models
{
    public class CreateOrderRequest : BaseOrder
    {
        public string CustomerId { get; set; }

        public CreateOrderRequest(OrderItems[] orderItems, string customerId) : base(orderItems)
        {
            CustomerId = customerId;
        }
	}
}