using DistributedEStore.Common.Messages;
using System;
using System.Text.Json.Serialization;

namespace DistributedEStore.Api.Messages.Commands.Identity
{
    [MessageNamespace("identity")]
    public class SignInCommand : ICommand
    {
        public Guid Id { get; set; }
        public string Email { get; }
        public string Password { get; }

        [JsonConstructor]
        public SignInCommand(string email, string password)
        {
            Email = email;
            Password = password;
        }
    }
}