using DistributedEStore.Common.Types;
using DistributedEStore.Services.Products.Dto;
using System;

namespace DistributedEStore.Services.Products.Queries
{
    public class GetProduct : IQuery<ProductDto>
    {
        public Guid Id { get; set; }
    }
}
