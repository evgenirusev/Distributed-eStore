using DistributedEStore.Common.Types;
using DistributedEStore.Services.Product.Queries;
using System;
using System.Threading.Tasks;

namespace DistributedEStore.Services.Products.Repositories
{
    public interface IProductsRepository
    {
        Task<Domain.Product> GetAsync(Guid id);
        Task<bool> ExistsAsync(Guid id);
        Task<bool> ExistsAsync(string name);
        Task<PagedResult<Domain.Product>> BrowseAsync(BrowseProducts query);
        Task AddAsync(Domain.Product product);
        Task UpdateAsync(Domain.Product product);
        Task DeleteAsync(Guid id);
    }
}