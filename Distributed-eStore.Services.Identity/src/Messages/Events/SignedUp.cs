using System;
using DistributedEStore.Common.Messages;
using Newtonsoft.Json;

namespace DistributedEStore.Services.Identity.Messages.Events
{
    public class SignedUp : IEvent
    {
        public Guid UserId { get; }
        public string Email { get; }
        public string Role { get; }

        [JsonConstructor]
        public SignedUp(Guid userId, string email, string role)
        {
            UserId = userId;
            Email = email;
            Role = role;
        }
    }
}