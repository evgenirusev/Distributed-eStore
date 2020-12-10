using System;
using DShop.Common.Messages;
using Newtonsoft.Json;

namespace DShop.Services.Identity.Messages.Commands
{
    public class ChangePassword : ICommand
    {
        public Guid UserId { get; }
        public string CurrentPassword { get; }
        public string NewPassword { get; }

        [JsonConstructor]
        public ChangePassword(Guid userId, 
            string currentPassword,string newPassword)
        {
            UserId = userId;
            CurrentPassword = currentPassword;
            NewPassword = newPassword;
        }
    }
}