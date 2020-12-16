using DistributedEStore.Api.Queries;
using Microsoft.AspNetCore.Mvc;
using RestEase;
using System;
using System.Threading.Tasks;

namespace DistributedEStore.Api.Services
{
    [SerializationMethods(Query = QuerySerializationMethod.Serialized)]
    public interface IApiGatewayService
    {
        [AllowAnyStatusCode]
        [Get("products")]
        public Task<IActionResult> Get([FromQuery] BrowseProducts query);

        [Get("products/{id}")]
        public Task<IActionResult> Get(Guid id);
    }
}