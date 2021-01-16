using DistributedEStore.Common.Messages.Orders;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using DistributedEStore.Common.Mvc;
using DistributedEStore.Common.RabbitMq;
using DistributedEStore.Api.Services;

namespace DistributedEStore.Api.Gateway.Controllers
{
    public class OrdersController : BaseController
    {
        private readonly IOrdersService _ordersService;

        public OrdersController(IBusPublisher busPublisher, IOrdersService ordersService)
            : base(busPublisher)
        {
            _ordersService = ordersService;
        }

        [HttpPost]
        public async Task<IActionResult> Post(CreateOrder command)
            => await SendAsync(command.BindId(c => c.Id),
                resourceId: command.Id, resource: "products");
    }
}
