using System.Threading.Tasks;
using DistributedEStore.Common.Types;

namespace DistributedEStore.Common.Dispatchers
{
    public interface IQueryDispatcher
    {
        Task<TResult> QueryAsync<TResult>(IQuery<TResult> query);
    }
}