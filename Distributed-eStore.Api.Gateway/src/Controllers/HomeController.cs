using Microsoft.AspNetCore.Mvc;

namespace Distributed_eStore.Api.Gateway.Controllers
{
    [Route("")]
    public class HomeController : ControllerBase
    {
        [HttpGet]
        public IActionResult Index() => Ok("Distributed-eStore Home Page");
    }
}
