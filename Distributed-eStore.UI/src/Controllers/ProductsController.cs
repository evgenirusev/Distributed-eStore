using DistributedEStore.Api.Services;
using Microsoft.AspNetCore.Mvc;
using DistributedEStore.Api.Queries;
using System.Threading.Tasks;

namespace DistributedEStore.UI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductsController : BaseController
    {
        private readonly IApiGatewayService apiGatewayService;

        public ProductsController(IApiGatewayService apiGatewayService)
        {
            this.apiGatewayService = apiGatewayService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await apiGatewayService.BrowseAsync(new BrowseProducts()));
        }
    }
}