using System.Threading.Tasks;
using Consul;

namespace DistributedEStore.Common.Consul
{
    public interface IConsulServicesRegistry
    {
        Task<AgentService> GetAsync(string name);
    }
}