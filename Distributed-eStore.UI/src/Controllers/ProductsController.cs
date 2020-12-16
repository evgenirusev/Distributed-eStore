using DistributedEStore.Common.Models.Products;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace DistributedEStore.UI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductsController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return null;
        }
    }
}
