using DistributedEStore.Common.Handlers;
using DistributedEStore.Services.Products.Dto;
using DistributedEStore.Services.Products.Queries;
using DistributedEStore.Services.Products.Repositories;
using System.Threading.Tasks;

namespace DistributedEStore.Services.Products.Handlers
{
    public sealed class GetProductHandler : IQueryHandler<GetProduct, ProductDto>
    {
        private readonly IProductsRepository _productsRepository;

        public GetProductHandler(IProductsRepository productsRepository)
            => _productsRepository = productsRepository;

        public async Task<ProductDto> HandleAsync(GetProduct query)
        {
            var product = await _productsRepository.GetAsync(query.Id);

            return product == null ? null : new ProductDto
            {
                Id = product.Id,
                Name = product.Name,
                Description = product.Description,
                Price = product.Price
            };
        }
    }
}
