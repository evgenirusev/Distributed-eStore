using Microsoft.AspNetCore.Mvc;

namespace DistributedEStore.Services.Identity.Controllers
{
    [Route("")]
    public class HomeController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get() => Ok("DistributedEStore Identity Service");
    }
}