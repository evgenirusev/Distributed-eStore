using DistributedEStore.Common.Types;
using DistributedEStore.Common.Queries;
using RestEase;
using System;
using System.Threading.Tasks;
using DistributedEStore.Common.Models.Products;

namespace DistributedEStore.Api.Services
{
    [SerializationMethods(Query = QuerySerializationMethod.Serialized)]
    public interface IIdentityService
    {
        [AllowAnyStatusCode]
        [Get("identity/sign-up")]
        Task<PagedResult<Product>> Register([Query] BrowseProducts query);

        [AllowAnyStatusCode]
        [Get("identity/sign-in")]
        Task<PagedResult<Product>> Login([Query] BrowseProducts query);
    }
}
