using System;
using DistributedEStore.Common.Messages;
using DistributedEStore.Common.Types;

namespace DistributedEStore.Common.RabbitMq
{
    public interface IBusSubscriber
    {
        IBusSubscriber SubscribeCommand<TCommand>(string @namespace = null, string queueName = null,
            Func<TCommand, DistributedEStoreException, IRejectedEvent> onError = null)
            where TCommand : ICommand;

        IBusSubscriber SubscribeEvent<TEvent>(string @namespace = null, string queueName = null,
            Func<TEvent, DistributedEStoreException, IRejectedEvent> onError = null) 
            where TEvent : IEvent;
    }
}
