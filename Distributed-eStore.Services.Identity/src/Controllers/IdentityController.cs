using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using DShop.Common.Mvc;
using DShop.Services.Identity.Messages.Commands;
using DShop.Services.Identity.Messages.Events;
using DShop.Services.Identity.Services;
using System;
using DShop.Common.Authentication;

namespace DShop.Services.Identity.Controllers
{
    [Route("")]
    [ApiController]
    public class IdentityController : BaseController
    {
        private readonly IIdentityService _identityService;
        private readonly IRefreshTokenService _refreshTokenService;

        public IdentityController(IIdentityService identityService,
            IRefreshTokenService refreshTokenService)
        {
            _identityService = identityService;
            _refreshTokenService = refreshTokenService;
        }

        [HttpGet("me")]
        [JwtAuth]
        public IActionResult Get() => Content($"Your id: '{UserId:N}'.");

        [HttpPost("sign-up")]
        public async Task<IActionResult> SignUp(SignUp command)
        {
            command.BindId(c => c.Id);
            await _identityService.SignUpAsync(command.Id, 
                command.Email, command.Password, command.Role);

            return NoContent();
        }

        [HttpPost("sign-in")]
        public async Task<IActionResult> SignIn(SignIn command)
            => Ok(await _identityService.SignInAsync(command.Email, command.Password));

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