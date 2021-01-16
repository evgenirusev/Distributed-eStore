using DistributedEStore.Api.Services;
using DistributedEStore.Common.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace DistributedEStore.UI.Controllers
{
    public class OrdersController : BaseController
    {
        private readonly IApiGatewayService apiGatewayService;

        public OrdersController(IApiGatewayService apiGatewayService)
        {
            this.apiGatewayService = apiGatewayService;
        }

        [HttpPost]
        public async Task<IActionResult> Post(CreateOrderRequest createOrderRequest)
        {
            var x = await apiGatewayService.CreateOrder(
                    MapRequestToCreateOrder(createOrderRequest)
                );

            return Ok();
        }

        // technical debt - refactor
        private CreateOrder MapRequestToCreateOrder(CreateOrderRequest createOrderRequest)
        {
            return new CreateOrder(createOrderRequest.OrderItems, new Guid(createOrderRequest.CustomerId));
        }
    }
}