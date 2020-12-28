using DistributedEStore.Common.Types;
using DistributedEStore.Common.Queries;
using DistributedEStore.Common.Commands;
using RestEase;
using System.Threading.Tasks;
using DistributedEStore.Common.Models.Products;

namespace DistributedEStore.Api.Services
{
    [SerializationMethods(Query = QuerySerializationMethod.Serialized)]
    public interface IIdentityService
    {
        [AllowAnyStatusCode]
        [Get("identity/sign-up")]
        Task<PagedResult<Product>> SignUp([Query] SignUpCommand signUpCommand);

        [AllowAnyStatusCode]
        [Get("identity/sign-in")]
        Task<PagedResult<Product>> SignIn([Query] SignInCommand signUpCommand);
    }
}
