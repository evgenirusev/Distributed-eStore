using DistributedEStore.Api.Services;
using DistributedEStore.Common.Models;
using Microsoft.AspNetCore.Mvc;
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
        public async Task<IActionResult> Post(CreateOrder createOrder)
            => await apiGatewayService.CreateOrder(createOrder);
    }
}