using System;
using DistributedEStore.Common.Messages;
using Newtonsoft.Json;

namespace DistributedEStore.Services.Identity.Messages.Events
{
    public class AccessTokenRevoked : IEvent
    {
        public Guid UserId { get; }

        [JsonConstructor]
        public AccessTokenRevoked(Guid userId)
        {
            UserId = userId;
        }
    }
}