using System.Threading.Tasks;
using DistributedEStore.Common.Types;

namespace DistributedEStore.Common.Handlers
{
    public interface IQueryHandler<TQuery,TResult> where TQuery : IQuery<TResult>
    {
        Task<TResult> HandleAsync(TQuery query);
    }
}