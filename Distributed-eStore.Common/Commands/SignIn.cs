namespace DistributedEStore.Common.Queries
{
    public class SignIn
    {
        public string Email { get; }
        public string Password { get; }

        public SignIn(string email, string password)
        {
            Email = email;
            Password = password;
        }
    }
}