using DistributedEStore.Common.Authentication;

namespace DistributedEStore.Api.Auth
{
    public class AdminAuth : JwtAuthAttribute
    {
        public AdminAuth() : base("admin")
        {
        }
    }
}