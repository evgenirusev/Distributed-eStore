using DistributedEStore.Common.Messages;
using DistributedEStore.Services.Products.DomainEntities;
using Newtonsoft.Json;
using System;

namespace DistributedEStore.Services.Products.Messages.Commands
{
	[MessageNamespace("products")]
	public class CreateProduct : ICommand
	{
		public Guid Id { get; }
		public string Name { get; }
		public string Description { get; }
		public decimal Price { get; }
		public string Category { get; set; }
		public string[] ImageURLs { get; set; }
		public string[] Colors { get; set; }

		[JsonConstructor]
		public CreateProduct(Guid id, string name, string description, decimal price, string category, string[] urls, string[] colors)
		{
			Id = id;
			Name = name;
			Description = description;
			Price = price;
			Category = category;
            ImageURLs = urls;
            Colors = colors;
        }
	}
}