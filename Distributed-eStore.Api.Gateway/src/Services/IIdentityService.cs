using DistributedEStore.Common.Commands.Identity;
using RestEase;
using System.Threading.Tasks;
using DistributedEStore.Common.Authentication;
using DistributedEStore.Common.Models;

namespace DistributedEStore.Api.Services
{
    [SerializationMethods(Query = QuerySerializationMethod.Serialized)]
    public interface IIdentityService
    {
        [AllowAnyStatusCode]
        [Post("api/v1/identity/sign-up")]
        Task<RegisterUserResponse> SignUp([Body] SignUpCommand signUpCommand);

        [AllowAnyStatusCode]
        [Post("api/v1/identity/sign-in")]
        Task<JsonWebToken> SignIn([Body] SignInCommand signInCommand);
    }
}