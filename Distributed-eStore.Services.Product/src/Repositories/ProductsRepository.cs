using System;
using System.Threading.Tasks;
using DistributedEStore.Common.Mongo;
using DistributedEStore.Common.Types;
using DistributedEStore.Services.Product.Queries;

namespace DistributedEStore.Services.Products.Repositories
{
    public class ProductsRepository : IProductsRepository
    {
        private readonly IMongoRepository<DomainEntities.Product> _repository;

        public ProductsRepository(IMongoRepository<DomainEntities.Product> repository)
        {
            _repository = repository;
        }

        public async Task<DomainEntities.Product> GetAsync(Guid id)
            => await _repository.GetAsync(id);

        public async Task<bool> ExistsAsync(Guid id)
            => await _repository.ExistsAsync(p => p.Id == id);

        public async Task<bool> ExistsAsync(string name)
            => await _repository.ExistsAsync(p => p.Name == name.ToLowerInvariant());

        public async Task<PagedResult<DomainEntities.Product>> BrowseAsync(BrowseProducts query)
            => await _repository.BrowseAsync(p => p.Category == query.Category, query);

        public async Task AddAsync(DomainEntities.Product product)
            => await _repository.AddAsync(product);

        public async Task UpdateAsync(DomainEntities.Product product)
            => await _repository.UpdateAsync(product);

        public async Task DeleteAsync(Guid id)
            => await _repository.DeleteAsync(id);
    }
}