using System;
using DistributedEStore.Common.Messages;
using Newtonsoft.Json;

namespace DistributedEStore.Api.Messages.Commands.Products
{
	[MessageNamespace("products")]
	public class CreateProduct : ICommand
	{
		public Guid Id { get; set; }
		public string Name { get; set; }
		public string Description { get; set; }
		public string Category { get; set; }
		public decimal Price { get; set; }
        public string[] ImageURLs { get; set; }
        public string[] Colors { get; set; }

        [JsonConstructor]
		public CreateProduct(Guid id, string name, string description, decimal price,
			string category/*, string[] urls, string[] colors*/)
		{
			Id = id;
			Name = name;
			Description = description;
			Price = price;
			Category = category;
			//ImageURLs = urls;
			//Colors = colors;
		}
	}
}