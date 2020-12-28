namespace DistributedEStore.Common.Commands.Identity
{
    public class SignUpCommand
    {
        public string Email { get; }
        public string FirstName { get; }
        public string LastName { get; }
        public string Password { get; }
        public string Role { get; }

        public SignUpCommand()
        {
            // technical debt
            Role = "admin";
        }
    }
}