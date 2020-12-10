using DistributedEStore.Api.Messages.Commands.Products;
using DistributedEStore.Api.Queries;
using DistributedEStore.Api.Services;
using DistributedEStore.Common.RabbitMq;
using DistributedEStore.Services.Product.Controllers;
using Microsoft.AspNetCore.Mvc;
using OpenTracing;
using System.Threading.Tasks;
using DistributedEStore.Common.Mvc;
using System;
using DistributedEStore.Api.Auth;
using Microsoft.AspNetCore.Authorization;

namespace DistributedEStore.Api.Gateway.Controllers
{
    [AdminAuth]
    public class ProductsController : BaseController
    {
        private readonly IProductsService _productsService;

        public ProductsController(IBusPublisher busPublisher, ITracer tracer, IProductsService productsService) 
            : base(busPublisher, tracer)
        {
            _productsService = productsService;
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> Get([FromQuery] BrowseProducts query)
        {
            return Ok(await _productsService.BrowseAsync(query));
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