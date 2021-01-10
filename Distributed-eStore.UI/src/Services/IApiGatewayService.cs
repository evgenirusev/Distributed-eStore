using DistributedEStore.Common.Authentication;
using DistributedEStore.Common.Commands.Identity;
using DistributedEStore.Common.Models.Products;
using DistributedEStore.Common.Queries;
using DistributedEStore.Common.Types;
using Microsoft.AspNetCore.Mvc;
using RestEase;
using System.Threading.Tasks;
using DistributedEStore.Common.Models;
using System;

namespace DistributedEStore.Api.Services
{
    [SerializationMethods(Query = QuerySerializationMethod.Serialized)]
    public interface IApiGatewayService
    {
        [AllowAnyStatusCode]
        [Get("api/v1/products")]
        public Task<PagedResult<Product>> BrowseAsync([FromQuery] BrowseProducts query);

        [AllowAnyStatusCode]
        [Get("api/v1/products/{id}")]
        public Task<Product> GetProductById([Path] Guid id);

        [AllowAnyStatusCode]
        [Post("api/v1/identity/sign-up")]
        public Task<RegisterUserResponse> SignUp([Body] SignUpCommand command);

        [AllowAnyStatusCode]
        [Post("api/v1/identity/sign-in")]
        public Task<JsonWebToken> SignIn([Body] SignInCommand command);

        [AllowAnyStatusCode]
        [Post("api/v1/orders")]
        public Task<IActionResult> CreateOrder([Body] SignInCommand command);
    }
}