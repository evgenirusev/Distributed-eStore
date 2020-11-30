using Microsoft.AspNetCore.Mvc;

namespace DistributedEStore.Api.Gateway.Controllers
{
    // TODO: extract commonalities in one more level of abstraction - call it something like BaseController : ControllerBase
    [Route("[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        [HttpGet]
        public IActionResult Index() => Ok("PRODUCT!!");
        //public async Task<IActionResult> Index()
        //{
        //    HttpClient client = new HttpClient();
        //    HttpResponseMessage response = await client.GetAsync("https://hookb.in/9X13zX88ZjI600eMo1Yy");
        //    response.EnsureSuccessStatusCode();
        //    string responseBody = await response.Content.ReadAsStringAsync();

        //    return Ok(responseBody);
        //}
    }
}
