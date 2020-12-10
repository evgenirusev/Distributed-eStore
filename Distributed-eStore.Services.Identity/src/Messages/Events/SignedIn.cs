using System;
using DShop.Common.Messages;
using Newtonsoft.Json;

namespace DShop.Services.Identity.Messages.Events
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