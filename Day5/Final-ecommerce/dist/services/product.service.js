var ProductService = /** @class */ (function () {
    function ProductService() {
        this.catalogs = [
            {
                "id": 1,
                "productName": "Men's T-Shirt",
                "description": "Comfortable cotton t-shirt for everyday wear.",
                "price": 19.99,
                "imagePath": "https://m.media-amazon.com/images/I/71wQBXJkgUL._SY879_.jpg"
            },
            {
                "id": 2,
                "productName": "Women's Jeans",
                "description": "Stylish and durable jeans for women.",
                "price": 49.99,
                "imagePath": "https://m.media-amazon.com/images/I/71wqxA19uuL._SX679_.jpg"
            },
            {
                "id": 3,
                "productName": "Men's Jacket",
                "description": "Warm and fashionable jacket for men.",
                "price": 89.99,
                "imagePath": "https://m.media-amazon.com/images/I/617PqifhwSL._SY879_.jpg"
            },
            {
                "id": 4,
                "productName": "Women's Dress",
                "description": "Elegant dress for special occasions.",
                "price": 59.99,
                "imagePath": "https://m.media-amazon.com/images/I/61MwxbBTeAL._SY879_.jpg"
            },
            {
                "id": 5,
                "productName": "Men's Shorts",
                "description": "Comfortable shorts for casual wear.",
                "price": 29.99,
                "imagePath": "https://m.media-amazon.com/images/I/61Z4Q9K3bqL._SY879_.jpg"
            },
            {
                "id": 6,
                "productName": "Women's Blouse",
                "description": "Stylish blouse for women.",
                "price": 39.99,
                "imagePath": "https://m.media-amazon.com/images/I/41UECKaVY7L.jpg"
            },
            {
                "id": 7,
                "productName": "Men's Suit",
                "description": "Elegant suit for formal occasions.",
                "price": 199.99,
                "imagePath": "https://m.media-amazon.com/images/I/51O5-7-cv4L._SX679_.jpg"
            },
            {
                "id": 8,
                "productName": "Women's Skirt",
                "description": "Fashionable skirt for women.",
                "price": 34.99,
                "imagePath": "https://m.media-amazon.com/images/I/31ULXATBHAL.jpg"
            },
            {
                "id": 9,
                "productName": "Men's Sweater",
                "description": "Warm sweater for men.",
                "price": 49.99,
                "imagePath": "https://m.media-amazon.com/images/I/51rXPWgvPFL._SX679_.jpg"
            },
            {
                "id": 10,
                "productName": "Women's Coat",
                "description": "Stylish coat for women.",
                "price": 99.99,
                "imagePath": "https://m.media-amazon.com/images/I/5153AFaJqRL._SY879_.jpg"
            },
            {
                "id": 11,
                "productName": "Leriya Fashion 3-Piece Blazer Set for Women",
                "description": "This western co-ord sets for women has wide lag pant style, crop tank tops, & full long sleeves characterize this outfit.",
                "price": 49.99,
                "imagePath": "https://m.media-amazon.com/images/I/51tVAa54o+L._SY879_.jpg"
            }
        ];
    }
    // Method to get all products
    ProductService.prototype.getCatalogs = function () {
        return this.catalogs;
    };
    // Method to get a product by its ID
    ProductService.prototype.getProductById = function (productId) {
        var products = null;
        for (var _i = 0, _a = this.catalogs; _i < _a.length; _i++) {
            var product = _a[_i];
            if (product.id === productId) {
                products = product;
                break;
            }
        }
        return products;
    };
    // Method to add a product to the cart (using sessionStorage)
    ProductService.prototype.addToCart = function (product) {
        var cart = JSON.parse(sessionStorage.getItem('cart') || '[]');
        cart.push(product);
        sessionStorage.setItem('cart', JSON.stringify(cart));
    };
    ProductService.prototype.addToCartDetails = function (product) {
        var cart = JSON.parse(sessionStorage.getItem('cart') || '[]');
        cart.push(product);
        sessionStorage.setItem('cart', JSON.stringify(cart));
    };
    return ProductService;
}());

