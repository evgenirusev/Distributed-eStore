using DistributedEStore.Common.Dispatchers;
using DistributedEStore.Common.Types;
using DistributedEStore.Services.Product.Queries;
using DistributedEStore.Services.Products.Controllers;
using DistributedEStore.Services.Products.Dto;
using DistributedEStore.Services.Products.Queries;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace DistributedEStore.Services.Product.Controllers
{
    public class ProductsController : ProductsBaseController
    {
        public ProductsController(IDispatcher dispatcher) : base(dispatcher) { }

        [HttpGet]
        public async Task<ActionResult<PagedResult<ProductDto>>> Get([FromQuery] BrowseProducts query)
            => Collection(await QueryAsync(query));

        [HttpGet("{id}")]
        public async Task<ActionResult<ProductDto>> GetAsync([FromRoute] GetProduct query)
            => Single(await QueryAsync(query));
    }
}
