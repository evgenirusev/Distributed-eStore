using System.Threading.Tasks;
using Autofac;
using DistributedEStore.Common.Handlers;
using DistributedEStore.Common.Messages;
using DistributedEStore.Common.RabbitMq;

namespace DistributedEStore.Common.Dispatchers
{
    public class CommandDispatcher : ICommandDispatcher
    {
        private readonly IComponentContext _context;

        public CommandDispatcher(IComponentContext context)
        {
            _context = context;
        }

        public async Task SendAsync<T>(T command) where T : ICommand
            => await _context.Resolve<ICommandHandler<T>>().HandleAsync(command, CorrelationContext.Empty);
    }
}