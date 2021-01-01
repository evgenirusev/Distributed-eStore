using DistributedEStore.Common.RabbitMq;
using DistributedEStore.Common.Mvc;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using DistributedEStore.Api.Services;
using DistributedEStore.Common.Commands.Identity;
using Microsoft.AspNetCore.Authorization;
using DistributedEStore.Common.Authentication;

namespace DistributedEStore.Api.Gateway.Controllers
{
    public class IdentityController : BaseController
    {
        private readonly IIdentityService _identityService;

        public IdentityController(IBusPublisher busPublisher, IIdentityService identityService)
            : base(busPublisher)
        {
            _identityService = identityService;
        }

        [AllowAnonymous]
        [HttpPost("sign-up")]
        public async Task<IActionResult> Post([FromBody] SignUpCommand command)
            => await _identityService.SignUp(command);

        [AllowAnonymous]
        [HttpPost("sign-in")]
        public async Task<JsonWebToken> Post([FromBody] SignInCommand command) {
            return await _identityService.SignIn(command);
        }
    }
}