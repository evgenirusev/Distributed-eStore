using DistributedEStore.Api.Gateway.Models.Products;
using DistributedEStore.Common.Types;
using DistributedEStore.Api.Queries;
using RestEase;
using System;
using System.Threading.Tasks;

namespace DistributedEStore.Api.Services
{
    [SerializationMethods(Query = QuerySerializationMethod.Serialized)]
    public interface IProductsService
    {
        [AllowAnyStatusCode]
        [Get("products")]
        Task<PagedResult<Product>> BrowseAsync([Query] BrowseProducts query);
        [AllowAnyStatusCode]

        [Get("products/{id}")]
        Task<Product> GetAsync([Path] Guid id);
    }
}
