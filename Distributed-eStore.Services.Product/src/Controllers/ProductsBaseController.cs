using DistributedEStore.Common.Dispatchers;
using DistributedEStore.Common.Messages;
using DistributedEStore.Common.Types;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace DistributedEStore.Services.Products.Controllers
{
    [ApiController]
    [Route("/api/v1/[controller]")]
    public class ProductsBaseController : ControllerBase
    {
        private readonly IDispatcher _dispatcher;

        public ProductsBaseController(IDispatcher dispatcher)
        {
            _dispatcher = dispatcher;
        }

        protected async Task<TResult> QueryAsync<TResult>(IQuery<TResult> query)
            => await _dispatcher.QueryAsync<TResult>(query);

        protected ActionResult<T> Single<T>(T data)
        {
            if (data == null)
            {
                return NotFound();
            }

            return Ok(data);
        }

        protected ActionResult<PagedResult<T>> Collection<T>(PagedResult<T> pagedResult)
        {
            if (pagedResult == null)
            {
                return NotFound();
            }

            return Ok(pagedResult);
        }
    }
}
