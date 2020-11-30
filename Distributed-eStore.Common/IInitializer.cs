using System.Threading.Tasks;

namespace DistributedEStore.Common
{
    public interface IInitializer
    {
        Task InitializeAsync();
    }
}