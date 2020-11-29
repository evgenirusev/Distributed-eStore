using System.Threading.Tasks;

namespace DistributedEStore.Common.Fabio
{
    public interface IFabioHttpClient
    {
        Task<T> GetAsync<T>(string requestUri);
    }
}