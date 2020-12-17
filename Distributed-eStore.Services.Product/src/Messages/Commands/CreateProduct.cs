using DistributedEStore.Common.Messages;
using DistributedEStore.Services.Products.Domain;
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
		public Category Category { get; set; }
		public string[] ImageURLs { get; set; }
		public string[] Colors { get; set; }

		[JsonConstructor]
		public CreateProduct(Guid id, string name, string description, decimal price, Category category, string[] urls, string[] colors)
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