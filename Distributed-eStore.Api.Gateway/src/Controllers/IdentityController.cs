using DistributedEStore.Common.Commands;
using DistributedEStore.Api.Services;
using DistributedEStore.Common.RabbitMq;
using DistributedEStore.Common.Mvc;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

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

        [HttpPost("sign-up")]
        public async Task<IActionResult> Post(SignInCommand command)
            => await SendAsync(command.BindId(c => c.Id),
                resourceId: command.Id, resource: "identity");

        [HttpPost("sign-in")]
        public async Task<IActionResult> Post(SignUpCommand command)
            => await SendAsync(command.BindId(c => c.Id),
                resourceId: command.Id, resource: "identity");
    }
}
