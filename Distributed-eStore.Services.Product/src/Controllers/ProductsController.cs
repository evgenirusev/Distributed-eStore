using DistributedEStore.Common.Dispatchers;
using DistributedEStore.Common.Types;
using DistributedEStore.Services.Product.Queries;
using DistributedEStore.Services.Products.Dto;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace DistributedEStore.Services.Product.Controllers
{
    public class ProductsController : BaseController
    {
        public ProductsController(IDispatcher dispatcher) : base(dispatcher) { }

        [HttpGet]
        public async Task<ActionResult<PagedResult<ProductDto>>> Get([FromQuery] BrowseProducts query)
        {
            return Ok(this.QueryAsync(query));
        }
    }
}
