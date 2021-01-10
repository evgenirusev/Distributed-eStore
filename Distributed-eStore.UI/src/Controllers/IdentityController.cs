using DistributedEStore.Api.Services;
using DistributedEStore.Common.Authentication;
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
        public async Task<IActionResult> Post([FromBody] SignUpCommand command) 
        {
            var response = await apiGatewayService.SignUp(command);

            // technical debt - should be abstracted in the identity microservice,
            // this controller must not be concerned with business logic.
            return response.Error ? BadRequest(response) : Ok(response);
        }

        [HttpPost("sign-in")]
        public async Task<JsonWebToken> Post([FromBody] SignInCommand command)
            => await apiGatewayService.SignIn(command);
    }
}