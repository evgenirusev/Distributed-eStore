using DistributedEStore.Common.Messages;
using Newtonsoft.Json;
using System;

namespace DistributedEStore.Services.Products.Messages.Commands
{
	public class CreateProduct : ICommand
	{
		public Guid Id { get; }
		public string Name { get; }
		public string Description { get; }
		public decimal Price { get; }

		[JsonConstructor]
		public CreateProduct(Guid id, string name, string description, decimal price)
		{
			Id = id;
			Name = name;
			Description = description;
			Price = price;
		}
	}
}