using System;
using System.Threading.Tasks;
using DistributedEStore.Common.Mongo;
using DistributedEStore.Common.Types;
using DistributedEStore.Services.Product.Queries;

namespace DistributedEStore.Services.Products.Repositories
{
    public class ProductsRepository : IProductsRepository
    {
        private readonly IMongoRepository<Domain.Product> _repository;

        public ProductsRepository(IMongoRepository<Domain.Product> repository)
        {
            _repository = repository;
        }

        public async Task<Domain.Product> GetAsync(Guid id)
            => await _repository.GetAsync(id);

        public async Task<bool> ExistsAsync(Guid id)
            => await _repository.ExistsAsync(p => p.Id == id);

        public async Task<bool> ExistsAsync(string name)
            => await _repository.ExistsAsync(p => p.Name == name.ToLowerInvariant());

        public async Task<PagedResult<Domain.Product>> BrowseAsync(BrowseProducts query)
            => await _repository.BrowseAsync(p =>
                p.Price >= query.PriceFrom && p.Price <= query.PriceTo, query);

        public async Task AddAsync(Domain.Product product)
            => await _repository.AddAsync(product);

        public async Task UpdateAsync(Domain.Product product)
            => await _repository.UpdateAsync(product);

        public async Task DeleteAsync(Guid id)
            => await _repository.DeleteAsync(id);
    }
}