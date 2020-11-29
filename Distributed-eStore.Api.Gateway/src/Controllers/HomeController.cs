using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Threading.Tasks;

namespace Distributed_eStore.Api.Gateway.Controllers
{
    // TODO: extract commonalities in one more level of abstraction - call it something like BaseController : ControllerBase
    [Route("[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        [HttpGet]
        public IActionResult Index() => Ok("Distributed-eStore Home PAAAAAGE");
    }
}
