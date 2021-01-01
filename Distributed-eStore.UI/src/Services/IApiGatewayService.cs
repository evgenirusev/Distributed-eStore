using DistributedEStore.Common.Authentication;
using DistributedEStore.Common.Commands.Identity;
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

        // TODO: implement product by id
        //[Get("products/{id}")]
        //public Task<IActionResult> Get(Guid id);

        [AllowAnyStatusCode]
        [Post("identity/sign-up")]
        public Task<IActionResult> SignUp([Body] SignUpCommand command);

        [AllowAnyStatusCode]
        [Post("identity/sign-in")]
        public Task<JsonWebToken> SignIn([Body] SignInCommand command);
    }
}