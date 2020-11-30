using System.Threading.Tasks;
using DistributedEStore.Common.Messages;

namespace DistributedEStore.Common.Dispatchers
{
    public interface ICommandDispatcher
    {
         Task SendAsync<T>(T command) where T : ICommand;
    }
}