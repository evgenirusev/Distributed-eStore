namespace DistributedEStore.Common.Commands
{
    public class SignUp
    {
        public string Email { get; }
        public string FirstName { get; }
        public string LastName { get; }
        public string Password { get; }
        public string Role { get; }

        public SignUp(string email, string firstName, string lastName, string password, string role)
        {
            Email = email;
            FirstName = firstName;
            LastName = lastName;
            Password = password;
            Role = role;
        }
    }
}