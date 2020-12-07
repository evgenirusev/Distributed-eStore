using DistributedEStore.Api.Queries;
using DistributedEStore.Api.Services;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace DistributedEStore.Api.Gateway.Controllers
{
    // TODO: extract commonalities in one more level of abstraction - call it something like BaseController : ControllerBase
    [Route("[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IProductsService _productsService;

        public ProductsController(IProductsService productsService) : base()
        {
            _productsService = productsService;
        }

        [HttpGet]
        public async Task<IActionResult> Get([FromQuery] BrowseProducts query)
        {
            return Ok(await _productsService.BrowseAsync(query));
        }
    }
}
