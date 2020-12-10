using System;
using DistributedEStore.Common.Messages;
using Newtonsoft.Json;

namespace DistributedEStore.Services.Identity.Messages.Events
{
    public class AccessTokenRefreshed : IEvent
    {
        public Guid UserId { get; }

        [JsonConstructor]
        public AccessTokenRefreshed(Guid userId)
        {
            UserId = userId;
        }
    }
}