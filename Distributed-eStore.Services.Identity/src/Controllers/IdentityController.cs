using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using DistributedEStore.Common.Mvc;
using DistributedEStore.Services.Identity.Messages.Commands;
using DistributedEStore.Services.Identity.Services;
using DistributedEStore.Common.Authentication;
using DistributedEStore.Common.Commands.Identity;
using RestEase;
using DistributedEStore.Common.Models;

namespace DistributedEStore.Services.Identity.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class IdentityController : BaseController
    {
        private readonly IIdentityService _identityService;

        public IdentityController(IIdentityService identityService)
        {
            _identityService = identityService;
        }

        [HttpGet("me")]
        [JwtAuth]
        public IActionResult Get() => Content($"Your id: '{UserId:N}'.");

        [HttpPost("sign-up")]
        public async Task<RegisterUserResponse> SignUp([Body] SignUpCommand command)
        {
            command.BindId(c => c.Id);
            return await _identityService.SignUpAsync(command.Id, 
                command.Email, command.FirstName, command.LastName, command.Password, command.Role);
        }

        [HttpPost("sign-in")]
        public async Task<JsonWebToken> SignIn([Body] SignInCommand command)
            => await _identityService.SignInAsync(command.Email, command.Password);

        [HttpPut("me/password")]
        [JwtAuth]
        public async Task<ActionResult> ChangePassword(ChangePassword command)
        {
            await _identityService.ChangePasswordAsync(command.Bind(c => c.UserId, UserId).UserId, 
                command.CurrentPassword, command.NewPassword);

            return NoContent();
        }
    }
}