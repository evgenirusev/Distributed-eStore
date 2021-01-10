using RestEase;

namespace DistributedEStore.Api.Services
{
    [SerializationMethods(Query = QuerySerializationMethod.Serialized)]
    public interface IOrdersService
    {
    }
}