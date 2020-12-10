using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DistributedEStore.Services.Identity.Services
{
    public interface IClaimsProvider
    {
         Task<IDictionary<string, string>> GetAsync(Guid userId);
    }
}