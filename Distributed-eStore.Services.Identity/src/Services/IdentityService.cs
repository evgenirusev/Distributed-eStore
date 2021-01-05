using System;
using System.Threading.Tasks;
using DistributedEStore.Common.Authentication;
using DistributedEStore.Common.RabbitMq;
using DistributedEStore.Common.Types;
using DistributedEStore.Services.Identity.Messages.Events;
using DistributedEStore.Services.Identity.Domain;
using DistributedEStore.Services.Identity.Repositories;
using Microsoft.AspNetCore.Identity;
using DistributedEStore.Common.Models;

namespace DistributedEStore.Services.Identity.Services
{
    public class IdentityService : IIdentityService
    {
        private readonly IUserRepository _userRepository;
        private readonly IPasswordHasher<User> _passwordHasher;
        private readonly IJwtHandler _jwtHandler;
        private readonly IRefreshTokenRepository _refreshTokenRepository;
        private readonly IClaimsProvider _claimsProvider;
        private readonly IBusPublisher _busPublisher;

        public IdentityService(IUserRepository userRepository,
            IPasswordHasher<User> passwordHasher,
            IJwtHandler jwtHandler,
            IRefreshTokenRepository refreshTokenRepository,
            IClaimsProvider claimsProvider,
            IBusPublisher busPublisher)
        {
            _userRepository = userRepository;
            _passwordHasher = passwordHasher;
            _jwtHandler = jwtHandler;
            _refreshTokenRepository = refreshTokenRepository;
            _claimsProvider = claimsProvider;
            _busPublisher = busPublisher;
        }

        public async Task<RegisterUserResponse> SignUpAsync(Guid id, string email, string firstName, string lastName, string password, string role = Role.User)
        {
            var response = new RegisterUserResponse();

            var user = await _userRepository.GetAsync(email);
            if (user != null)
            {
                response.Code = Codes.EmailInUse;
                response. Message = $"Email: '{email}' is already in use.";
            } 
            else
            {
                if (string.IsNullOrWhiteSpace(role))
                {
                    role = Role.User;
                }
                user = new User(id, email, firstName, lastName, role);
                user.SetPassword(password, _passwordHasher);
                await _userRepository.AddAsync(user);
                await _busPublisher.PublishAsync(new SignedUp(id, email, role), CorrelationContext.Empty);

                response.Code = Codes.RegistrationSuccessful;
                response.Message = $"Registration was successful.";
            }

            return response;
        }

        public async Task<JsonWebToken> SignInAsync(string email, string password)
        {
            var user = await _userRepository.GetAsync(email);
            if (user == null || !user.ValidatePassword(password, _passwordHasher))
            {
                throw new DistributedEStoreException(Codes.InvalidCredentials,
                    "Invalid credentials.");
            }
            var refreshToken = new RefreshToken(user, _passwordHasher);
            var claims = await _claimsProvider.GetAsync(user.Id);
            var jwt = _jwtHandler.CreateToken(user.Id.ToString("N"), user.Role, claims);
            jwt.RefreshToken = refreshToken.Token;
            await _refreshTokenRepository.AddAsync(refreshToken);

            return jwt;
        }

        public async Task ChangePasswordAsync(Guid userId, string currentPassword, string newPassword)
        {
            var user = await _userRepository.GetAsync(userId);
            if (user == null)
            {
                throw new DistributedEStoreException(Codes.UserNotFound, 
                    $"User with id: '{userId}' was not found.");
            }
            if (!user.ValidatePassword(currentPassword, _passwordHasher))
            {
                throw new DistributedEStoreException(Codes.InvalidCurrentPassword, 
                    "Invalid current password.");
            }
            user.SetPassword(newPassword, _passwordHasher);
            await _userRepository.UpdateAsync(user);
            await _busPublisher.PublishAsync(new PasswordChanged(userId), CorrelationContext.Empty);         
        }
    }
}