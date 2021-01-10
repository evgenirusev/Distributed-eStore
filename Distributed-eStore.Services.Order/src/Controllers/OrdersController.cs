using DistributedEStore.Common.Dispatchers;
using DistributedEStore.Common.Mvc;

namespace DistributedEStore.Services.Product.Controllers
{
    public class OrdersController : BaseController
    {
        public OrdersController(IDispatcher dispatcher) : base(dispatcher) { }
    }
}
