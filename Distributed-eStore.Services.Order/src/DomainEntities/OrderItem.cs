using DistributedEStore.Common.Types;
using System;

namespace DistributedEStore.Services.Orders.DomainEntities
{
    public class OrderItem : BaseEntity
    {
        public Guid ProductId { get; set; }
        public int Quantity { get; set; }
        public string Size { get; set; }

        public OrderItem(Guid id, string productId, int quantity, string size)
            : base(id)
        {
            SetProductId(id);
            SetQuantity(quantity);
            SetSize(size);
        }

        public void SetProductId(Guid productId)
        {
            ProductId = productId;
            SetUpdatedDate();
        }

        public void SetQuantity(int quantity)
        {
            if (quantity <= 0)
            {
                throw new DistributedEStoreException("invalid_product_quantity",
                    "Quantity cannot be zero or negative.");
            }

            Quantity = quantity;
            SetUpdatedDate();
        }

        public void SetSize(string size)
        {
            Size = size.Trim().ToLowerInvariant();
            SetUpdatedDate();
        }
    }
}