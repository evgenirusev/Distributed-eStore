using System;
using System.Threading.Tasks;
using DShop.Services.Identity.Domain;

namespace DShop.Services.Identity.Repositories
{
    public interface IRefreshTokenRepository
    {
        Task<RefreshToken> GetAsync(string token);
        Task AddAsync(RefreshToken token);
        Task UpdateAsync(RefreshToken token);
    }
}