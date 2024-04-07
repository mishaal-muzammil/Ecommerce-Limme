using API.Entities;

namespace API.Data
{
    public static class DbInitializer
    {
        public static void Initialize(StoreContext context)
        {
            if (context.Products.Any())
                return;

            var products = new List<Product>
            {
                new()
                {
                    Name = "Levis Hoodie",
                    Description =
                        "Genuine Levis Hoodie imported from USA. Men's Casual Jacket, Suitable for Casual Clothing. Trending Style",
                    Price = 15000,
                    Brand = "Levis",
                    Type = "Hoodie",
                    QuantityInStock = 50,
                    PictureUrl="/images/products/random_image.jpg"
                },
                new()
                {
                    Name = "Cozy Cotton Tee",
                    Description =
                        "Super soft and comfortable cotton T-shirt. Perfect for everyday wear.",
                    Price = 599,
                    Brand = "Uniqlo",
                    Type = "T-Shirt",
                    QuantityInStock = 25,
                    PictureUrl = "/images/products/random_image.jpg"
                },
                new()
                {
                    Name = "Tech Fleece Joggers",
                    Description = "Lightweight and breathable joggers with a stylish tapered fit.",
                    Price = 2999,
                    Brand = "Nike",
                    Type = "Pants",
                    QuantityInStock = 78,
                    PictureUrl = "/images/products/random_image.jpg"
                },
                new()
                {
                    Name = "Classic Denim Jacket",
                    Description = "Timeless denim jacket for a casual yet polished look.",
                    Price = 4500,
                    Brand = "Lee",
                    Type = "Jacket",
                    QuantityInStock = 12,
                    PictureUrl = "/images/products/random_image.jpg"
                },
                new()
                {
                    Name = "SolarWave Sunglasses",
                    Description = "Mirrored sunglasses with UV protection for a sporty look.",
                    Price = 1299,
                    Brand = "Adidas",
                    Type = "Accessories",
                    QuantityInStock = 40,
                    PictureUrl = "/images/products/random_image.jpg"
                },
                new()
                {
                    Name = "Floral Maxi Dress",
                    Description = "Flowy and feminine maxi dress with a beautiful floral print.",
                    Price = 3499,
                    Brand = "Zara",
                    Type = "Dress",
                    QuantityInStock = 15,
                    PictureUrl = "/images/products/random_image.jpg"
                }
            };
            
            foreach (var product in products)
            {
                context.Products.Add(product);
            }

            context.SaveChanges();
        }
    }
}
