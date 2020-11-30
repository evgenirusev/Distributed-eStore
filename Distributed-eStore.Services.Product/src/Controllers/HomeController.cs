using Microsoft.AspNetCore.Mvc;

namespace DistributedEStore.Services.Product.Controllers
{
    [Route("")]
    public class HomeController : ControllerBase
    {
        [HttpGet]
        public IActionResult Index() => Ok("Product Service Home Page");
    }
}
