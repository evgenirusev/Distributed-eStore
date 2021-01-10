using DistributedEStore.Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace DistributedEStore.UI.Controllers
{
    [ApiController]
    public class OrdersController : BaseController
    {
        private readonly IApiGatewayService apiGatewayService;

        public OrdersController(IApiGatewayService apiGatewayService)
        {
            this.apiGatewayService = apiGatewayService;
        }
    }
}