using System;
using DShop.Common.Messages;
using Newtonsoft.Json;

namespace DShop.Services.Identity.Messages.Events
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