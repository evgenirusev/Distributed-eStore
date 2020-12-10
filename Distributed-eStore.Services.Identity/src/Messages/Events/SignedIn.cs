using System;
using DistributedEStore.Common.Messages;
using Newtonsoft.Json;

namespace DistributedEStore.Services.Identity.Messages.Events
{
    public class SignedIn : IEvent
    {
        public Guid UserId { get; }

        [JsonConstructor]
        public SignedIn(Guid userId)
        {
            UserId = userId;
        }
    }
}