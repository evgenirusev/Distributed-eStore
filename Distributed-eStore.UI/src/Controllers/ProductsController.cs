using DistributedEStore.Api.Services;
using DistributedEStore.Common.Models.Products;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using DistributedEStore.Api.Queries;
using System.Threading.Tasks;

namespace DistributedEStore.UI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly IApiGatewayService apiGatewayService;

        public ProductsController(IApiGatewayService apiGatewayService)
        {
            this.apiGatewayService = apiGatewayService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return await apiGatewayService.Get(new BrowseProducts());
        }
    }
}