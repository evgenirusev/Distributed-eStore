using DistributedEStore.Common.Types;
using DistributedEStore.Common.Commands.Identity;
using RestEase;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DistributedEStore.Common.Authentication;
using DistributedEStore.Common.Models;

namespace DistributedEStore.Api.Services
{
    [SerializationMethods(Query = QuerySerializationMethod.Serialized)]
    public interface IIdentityService
    {
        [AllowAnyStatusCode]
        [Post("identity/sign-up")]
        Task<RegisterUserResponse> SignUp([Body] SignUpCommand signUpCommand);

        [AllowAnyStatusCode]
        [Post("identity/sign-in")]
        Task<JsonWebToken> SignIn([Body] SignInCommand signInCommand);
    }
}
