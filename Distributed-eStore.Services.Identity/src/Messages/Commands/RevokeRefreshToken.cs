using System;
using DShop.Common.Messages;
using Newtonsoft.Json;

namespace DShop.Services.Identity.Messages.Commands
{
    public class RevokeRefreshToken : ICommand
    {
        public Guid UserId { get; }
        public string Token { get; }

        [JsonConstructor]
        public RevokeRefreshToken(Guid userId, string token)
        {
            UserId = userId;
            Token = token;
        }
    }
}