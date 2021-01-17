using DistributedEStore.Common.Types;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DistributedEStore.Services.Orders.Repositories
{
    public interface IOrdersRepository
    {
        Task<DomainEntities.Order> GetAsync(Guid id);
        Task<IEnumerable<DomainEntities.Order>> GetAllAsync();
        Task AddAsync(DomainEntities.Order order);
        Task UpdateAsync(DomainEntities.Order order);
        Task DeleteAsync(Guid id);
    }
}