using DistributedEStore.Common.Messages;
using System;
using System.Text.Json.Serialization;

namespace DistributedEStore.Services.Order.Messages.Commands
{
	[MessageNamespace("orders")]
	public class CreateOrder : ICommand
	{
		public Guid Id { get; }

		[JsonConstructor]
		public CreateOrder(Guid id)
		{
			Id = id;
		}
	}
}
