using System.Collections.Generic;

namespace DistributedEStore.Common.Models
{
    class IdentityUser
    {
        public string AccessToken { get; }
        public string UserId { get; }
        public string Role { get; }
        public Dictionary<string, string> Claims { get; }

        public IdentityUser(string accessToken, string userId, string role, Dictionary<string, string> claims)
        {
            AccessToken = accessToken;
            UserId = userId;
            Role = role;
            Claims = claims;
        }
    };
}