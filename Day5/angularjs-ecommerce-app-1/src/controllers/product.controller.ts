class ProductController {
    static $inject = ['$scope', 'ProductService'];

    constructor(private $scope: ng.IScope, private productService: any) {
        this.$scope.products = [];
        this.$scope.selectedProduct = null;

        this.loadProducts();
    }

    loadProducts() {
        this.productService.getProducts().then((products: any) => {
            this.$scope.products = products;
        });
    }

    selectProduct(product: any) {
        this.$scope.selectedProduct = product;
        // Logic to redirect to product details page can be added here
    }
}

export default ProductController;