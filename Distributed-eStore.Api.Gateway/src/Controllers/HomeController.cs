using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DistributedEStore.Api.Gateway.Controllers
{
    [Route("")]
    public class HomeController : ControllerBase
    {
        [AllowAnonymous]
        [HttpGet]
        public IActionResult Index() => Ok("Distributed-eStore Home PAAAAAGE");
    }
}
