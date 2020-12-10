using System;
using DShop.Common.Messages;
using Newtonsoft.Json;

namespace DShop.Services.Identity.Messages.Events
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