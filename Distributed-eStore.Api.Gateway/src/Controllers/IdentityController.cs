using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DistributedEStore.Api.Gateway.Controllers
{
    public class IdentityController : BaseController
    {
        private readonly IIdentityService _productsService;

        public IdentityController(IBusPublisher busPublisher, IProductsService productsService)
            : base(busPublisher)
        {
            _productsService = productsService;
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<PagedResult<Product>> Get([FromQuery] BrowseProducts query)
        {
            return await _productsService.BrowseAsync(query);
        }

        [HttpGet("{id}")]
        [AllowAnonymous]
        public async Task<IActionResult> Get(Guid id)
            => Single(await _productsService.GetAsync(id));

        [HttpPost]
        public async Task<IActionResult> Post(CreateProduct command)
            => await SendAsync(command.BindId(c => c.Id),
                resourceId: command.Id, resource: "products");
    }
}
