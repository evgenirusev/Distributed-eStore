using DistributedEStore.Common.RabbitMq;
using DistributedEStore.Common.Mvc;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using DistributedEStore.Api.Services;
using DistributedEStore.Common.Commands.Identity;
using Microsoft.AspNetCore.Authorization;

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
        public async Task<IActionResult> Post([FromBody] SignInCommand command)
            => await _identityService.SignIn(command);
    }
}
