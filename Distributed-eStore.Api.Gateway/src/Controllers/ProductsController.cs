using DistributedEStore.Api.Messages.Commands.Products;
using DistributedEStore.Common.Queries;
using DistributedEStore.Api.Services;
using DistributedEStore.Common.RabbitMq;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System;
using DistributedEStore.Api.Auth;
using Microsoft.AspNetCore.Authorization;
using DistributedEStore.Common.Models.Products;
using DistributedEStore.Common.Types;

namespace DistributedEStore.Api.Gateway.Controllers
{
    [AdminAuth]
    public class ProductsController : BaseController
    {
        private readonly IProductsService _productsService;

        public ProductsController(IBusPublisher busPublisher, IProductsService productsService) 
            : base(busPublisher)
        {
            _productsService = productsService;
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<PagedResult<Product>> Get([FromQuery] BrowseProducts query)
            => await _productsService.BrowseAsync(query);

        [HttpGet("{id}")]
        [AllowAnonymous]
        public async Task<Product> GetProductById(Guid id)
            => await _productsService.GetProductById(id);

        [HttpPost]
        public async Task<IActionResult> Post(CreateProduct command)
            => await SendAsync(command.BindId(c => c.Id),
                resourceId: command.Id, resource: "products");
    }
}