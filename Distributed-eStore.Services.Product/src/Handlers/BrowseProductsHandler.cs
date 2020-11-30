using DistributedEStore.Common.Handlers;
using DistributedEStore.Common.Types;
using DistributedEStore.Services.Product.Queries;
using DistributedEStore.Services.Products.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DistributedEStore.Services.Products.Handlers
{
    public sealed class BrowseProductsHandler : IQueryHandler<BrowseProducts, PagedResult<ProductDto>>
    {
        // TODO: implement repository here

        Task<PagedResult<ProductDto>> IQueryHandler<BrowseProducts, PagedResult<ProductDto>>.HandleAsync(BrowseProducts query)
        {
            new List<ProductDto> { new ProductDto()
            {
                Id = new Guid("1343fc89-c90b-41b6-985c-13080e5e0744"),
                Name = "Product 1",
                Description = "Description 1",
                Price = 50
            }, new ProductDto()
            {
                Id = new Guid("1343fc89-c90b-41b6-985c-13080e5e0745"),
                Name = "Product 2",
                Description = "Description 2",
                Price = 100
            }};
            throw new NotImplementedException();
        }
    }
}