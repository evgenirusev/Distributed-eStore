using DistributedEStore.Common.Types;
using DistributedEStore.Services.Orders.Queries;
using System;
using System.Threading.Tasks;

namespace DistributedEStore.Services.Orders.Repositories
{
    public interface IOrdersRepository
    {
        Task<DomainEntities.Order> GetAsync(Guid id);
        Task<PagedResult<DomainEntities.Order>> BrowseAsync(BrowseOrders query);
        Task AddAsync(DomainEntities.Order order);
        Task UpdateAsync(DomainEntities.Order order);
        Task DeleteAsync(Guid id);
    }
}