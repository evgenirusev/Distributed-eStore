using System;
using System.Threading.Tasks;
using DistributedEStore.Common.Mongo;
using DistributedEStore.Services.Identity.Domain;
using MongoDB.Driver;
using MongoDB.Driver.Linq;

namespace DistributedEStore.Services.Identity.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly IMongoRepository<User> _repository;

        public UserRepository(IMongoRepository<User> repository)
        {
            _repository = repository;
        }

        public async Task<User> GetAsync(Guid id)
            => await _repository.GetAsync(id);

        public async Task<User> GetAsync(string email)
            => await _repository.GetAsync(x => x.Email == email.ToLowerInvariant());

        public async Task AddAsync(User user)
            => await _repository.AddAsync(user);

        public async Task UpdateAsync(User user)
            => await _repository.UpdateAsync(user);
    }
}