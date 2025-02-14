class ProductService {
    private products: Array<{ id: number, name: string, price: number }> = [
        { id: 1, name: 'Laptop A', price: 999 },
        { id: 2, name: 'Laptop B', price: 1299 },
        { id: 3, name: 'Laptop C', price: 1599 }
    ];
    private cart: Array<{ id: number, name: string, price: number }> = [];

    constructor() {}

    getProducts() {
        return this.products;
    }

    getProductById(id: number) {
        return this.products.find(product => product.id === id);
    }

    addToCart(product: { id: number, name: string, price: number }) {
        this.cart.push(product);
    }

    getCart() {
        return this.cart;
    }

    clearCart() {
        this.cart = [];
    }
}

export default ProductService;