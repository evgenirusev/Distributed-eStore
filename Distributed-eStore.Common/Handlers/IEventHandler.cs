using DistributedEStore.Common.RabbitMq;
using DistributedEStore.Common.Messages;
using System.Threading.Tasks;

namespace DistributedEStore.Common.Handlers
{
    public interface IEventHandler<in TEvent> where TEvent : IEvent
    {
        Task HandleAsync(TEvent @event, ICorrelationContext context);
    }
}