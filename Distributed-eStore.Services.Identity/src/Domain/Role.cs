namespace DShop.Services.Identity.Domain
{
    public static class Role
    {
        public const string User = "user";
        public const string Admin = "admin";

        public static bool IsValid(string role)
        {
            if (string.IsNullOrWhiteSpace(role))
            {
                return false;
            }
            role = role.ToLowerInvariant();

            return role == User || role == Admin;
        }
    }
}