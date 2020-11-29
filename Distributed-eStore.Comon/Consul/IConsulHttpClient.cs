using System.Threading.Tasks;

namespace DistributedEStore.Common.Consul
{
    public interface IConsulHttpClient
    {
        Task<T> GetAsync<T>(string requestUri);
    }
}

