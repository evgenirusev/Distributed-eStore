using System;
using DShop.Common.Messages;
using Newtonsoft.Json;

namespace DShop.Services.Identity.Messages.Events
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