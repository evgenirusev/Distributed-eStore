using DistributedEStore.Common.RabbitMq;
using DistributedEStore.Common.Messages;
using System.Threading.Tasks;

namespace DistributedEStore.Common.Handlers
{
    public interface ICommandHandler<in TCommand> where TCommand : ICommand
    {
        Task HandleAsync(TCommand command, ICorrelationContext context);
    }
}