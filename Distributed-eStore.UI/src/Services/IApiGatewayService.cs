using DistributedEStore.Common.Types;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RestEase;
using System;
using System.Threading.Tasks;

namespace DistributedEStore.Api.Services
{
    [SerializationMethods(Query = QuerySerializationMethod.Serialized)]
    public interface IApiGatewayService
    {
        public async Task<IActionResult> Get([FromQuery] BrowseProducts query);

        public async Task<IActionResult> Get(Guid id);
    }
}
