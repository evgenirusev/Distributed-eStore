using Microsoft.AspNetCore.Mvc;

namespace Distributed_eStore.Services.Product.Controllers
{
    [Route("")]
    public class HomeController : ControllerBase
    {
        [HttpGet]
        public IActionResult Index() => Ok("Product Service Home Page");
    }
}
