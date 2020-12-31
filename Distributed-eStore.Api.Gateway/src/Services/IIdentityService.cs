using DistributedEStore.Common.Types;
using DistributedEStore.Common.Commands.Identity;
using RestEase;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace DistributedEStore.Api.Services
{
    [SerializationMethods(Query = QuerySerializationMethod.Serialized)]
    public interface IIdentityService
    {
        [AllowAnyStatusCode]
        [Post("identity/sign-up")]
        Task<IActionResult> SignUp([Body] SignUpCommand signUpCommand);

        [AllowAnyStatusCode]
        [Post("identity/sign-in")]
        Task<IActionResult> SignIn([Body] SignInCommand signUpCommand);
    }
}
