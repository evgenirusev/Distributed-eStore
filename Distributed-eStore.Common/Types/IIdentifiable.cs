using System;

namespace DistributedEStore.Common.Types
{
    public interface IIdentifiable
    {
         Guid Id { get; }
    }
}