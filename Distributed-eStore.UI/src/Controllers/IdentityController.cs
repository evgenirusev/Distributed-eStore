using DistributedEStore.Api.Services;
using DistributedEStore.Common.Commands.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace DistributedEStore.UI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class IdentityController : BaseController
    {
        private readonly IApiGatewayService apiGatewayService;

        public IdentityController(IApiGatewayService apiGatewayService)
        {
            this.apiGatewayService = apiGatewayService;
        }

        [HttpPost("sign-up")]
        public async Task<IActionResult> Post([FromQuery] SignUpCommand query)
        {
            return Collection(await apiGatewayService.BrowseAsync(query));
        }

        [HttpPost("sign-in")]
        public async Task<IActionResult> Post([FromQuery] SignInCommand query)
        {
            return Collection(await apiGatewayService.BrowseAsync(query));
        }
    }
}
