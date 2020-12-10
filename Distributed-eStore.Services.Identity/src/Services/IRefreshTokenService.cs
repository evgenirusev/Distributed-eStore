using System;
using System.Threading.Tasks;
using DistributedEStore.Common.Authentication;

namespace DistributedEStore.Services.Identity.Services
{
    public interface IRefreshTokenService
    {
        Task AddAsync(Guid userId);
        Task<JsonWebToken> CreateAccessTokenAsync(string refreshToken);
        Task RevokeAsync(string refreshToken, Guid userId);
    }
}