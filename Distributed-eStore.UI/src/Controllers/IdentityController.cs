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
        public async Task<object> Post([FromQuery] SignUpCommand command)
        {
            return await apiGatewayService.SignUp(command);
        }

        [HttpPost("sign-in")]
        public async Task<object> Post([FromQuery] SignInCommand command)
        {
            return await apiGatewayService.SignIn(command);
        }
    }
}
