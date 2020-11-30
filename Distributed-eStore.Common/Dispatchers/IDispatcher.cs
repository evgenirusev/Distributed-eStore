using System.Threading.Tasks;
using DistributedEStore.Common.Types;
using DistributedEStore.Common.Messages;

namespace DistributedEStore.Common.Dispatchers
{
    public interface IDispatcher
    {
        Task SendAsync<TCommand>(TCommand command) where TCommand : ICommand;
        Task<TResult> QueryAsync<TResult>(IQuery<TResult> query);
    }
}