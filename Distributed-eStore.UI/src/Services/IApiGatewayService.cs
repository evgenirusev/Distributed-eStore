using DistributedEStore.Common.Models.Products;
using DistributedEStore.Common.Queries;
using DistributedEStore.Common.Types;
using Microsoft.AspNetCore.Mvc;
using RestEase;
using System.Threading.Tasks;

namespace DistributedEStore.Api.Services
{
    [SerializationMethods(Query = QuerySerializationMethod.Serialized)]
    public interface IApiGatewayService
    {
        [AllowAnyStatusCode]
        [Get("products")]
        public Task<PagedResult<Product>> BrowseAsync([FromQuery] BrowseProducts query);

        //[Get("products/{id}")]
        //public Task<IActionResult> Get(Guid id);
    }
}