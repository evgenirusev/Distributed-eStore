using DistributedEStore.Common.Messages.Orders;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using DistributedEStore.Common.Mvc;
using DistributedEStore.Common.RabbitMq;
using DistributedEStore.Api.Services;
using Microsoft.AspNetCore.Authorization;

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

        // technical debt - shouldn't be anonymous, todo - send JWT from UI.
        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> Post(CreateOrder command)
        {
            return await SendAsync(command.BindId(c => c.Id), resourceId: command.Id, resource: "products");
        }
    }
}