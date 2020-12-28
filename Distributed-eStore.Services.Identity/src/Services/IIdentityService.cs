using System;
using System.Threading.Tasks;
using DistributedEStore.Common.Authentication;
using DistributedEStore.Services.Identity.Domain;

namespace DistributedEStore.Services.Identity.Services
{
    public interface IIdentityService
    {
        Task SignUpAsync(Guid id, string email, string firstName, string lastName, string password, string role = Role.User);
        Task<JsonWebToken> SignInAsync(string email, string password);
        Task ChangePasswordAsync(Guid userId, string currentPassword, string newPassword);         
    }
}