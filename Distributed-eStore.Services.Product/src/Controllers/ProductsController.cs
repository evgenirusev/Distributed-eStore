using DistributedEStore.Common.Dispatchers;
using DistributedEStore.Common.RabbitMq;
using DistributedEStore.Common.Types;
using DistributedEStore.Services.Product.Queries;
using DistributedEStore.Services.Products.Controllers;
using DistributedEStore.Services.Products.Dto;
using Microsoft.AspNetCore.Mvc;
using OpenTracing;
using System.Threading.Tasks;

namespace DistributedEStore.Services.Product.Controllers
{
    public class ProductsController : ProductsBaseController
    {
        public ProductsController(IDispatcher dispatcher) : base(dispatcher) { }

        [HttpGet]
        public async Task<ActionResult<PagedResult<ProductDto>>> Get([FromQuery] BrowseProducts query)
        {
            return Ok(this.QueryAsync(query));
        }
    }
}
