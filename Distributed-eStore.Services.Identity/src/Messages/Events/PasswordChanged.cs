using System;
using DistributedEStore.Common.Messages;
using Newtonsoft.Json;

namespace DistributedEStore.Services.Identity.Messages.Events
{
    public class PasswordChanged : IEvent
    {
        public Guid UserId { get; }

        [JsonConstructor]
        public PasswordChanged(Guid userId)
        {
            UserId = userId;
        }
    }
}