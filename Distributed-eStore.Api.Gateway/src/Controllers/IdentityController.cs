using DistributedEStore.Common.RabbitMq;
using DistributedEStore.Common.Mvc;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using DistributedEStore.Api.Messages.Commands.Identity;

namespace DistributedEStore.Api.Gateway.Controllers
{
    public class IdentityController : BaseController
    {
        public IdentityController(IBusPublisher busPublisher)
            : base(busPublisher) 
        { }

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
