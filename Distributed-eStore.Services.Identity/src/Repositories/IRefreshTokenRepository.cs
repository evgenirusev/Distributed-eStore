using System;
using System.Threading.Tasks;
using DistributedEStore.Services.Identity.Domain;

namespace DistributedEStore.Services.Identity.Repositories
{
    public interface IRefreshTokenRepository
    {
        Task<RefreshToken> GetAsync(string token);
        Task AddAsync(RefreshToken token);
        Task UpdateAsync(RefreshToken token);
    }
}