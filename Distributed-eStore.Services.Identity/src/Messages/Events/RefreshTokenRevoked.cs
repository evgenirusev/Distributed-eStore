using System;
using DistributedEStore.Common.Messages;
using Newtonsoft.Json;

namespace DistributedEStore.Services.Identity.Messages.Events
{
    public class RefreshTokenRevoked : IEvent
    {
        public Guid UserId { get; }

        [JsonConstructor]
        public RefreshTokenRevoked(Guid userId)
        {
            UserId = userId;
        }
    }
}