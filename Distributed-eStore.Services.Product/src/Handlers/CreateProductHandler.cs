using DistributedEStore.Common.Handlers;
using DistributedEStore.Common.RabbitMq;
using DistributedEStore.Services.Products.Messages.Commands;
using DistributedEStore.Services.Products.Repositories;
using System.Threading.Tasks;
using DistributedEStore.Common.Types;

namespace DistributedEStore.Services.Products.Handlers
{
    public sealed class CreateProductHandler : ICommandHandler<CreateProduct>
    {
        private readonly IProductsRepository _productsRepository;

        public CreateProductHandler(IProductsRepository productsRepository)
        {
            _productsRepository = productsRepository;
        }

        public async Task HandleAsync(CreateProduct command, ICorrelationContext context)
        {
            if (await _productsRepository.ExistsAsync(command.Name))
            {
                throw new DistributedEStoreException("product_already_exists",
                    $"Product: '{command.Name}' already exists.");
            }

            var product = new DomainEntities.Product(command.Id, command.Name, command.Description,
                command.Price, command.Category, command.ImageURLs, command.Colors);
            await _productsRepository.AddAsync(product);
        }
    }
}
