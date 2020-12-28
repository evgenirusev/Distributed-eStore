using DistributedEStore.Common.Messages;
using System;
using System.Text.Json.Serialization;

namespace DistributedEStore.Api.Messages.Commands.Identity
{
    [MessageNamespace("identity")]
    public class SignUpCommand : ICommand
    {
        public Guid Id { get; set; }
        public string Email { get; }
        public string FirstName { get; }
        public string LastName { get; }
        public string Password { get; }
        public string Role { get; }

        [JsonConstructor]
        public SignUpCommand(Guid id, string email, string firstName, string lastName, string password, string role)
        {
            Id = id;
            Email = email;
            FirstName = firstName;
            LastName = lastName;
            Password = password;
            Role = role;
        }
    }
}