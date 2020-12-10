using System.Threading.Tasks;

namespace DistributedEStore.Common.Mongo
{
    public interface IMongoDbSeeder
    {
        Task SeedAsync();
    }
}