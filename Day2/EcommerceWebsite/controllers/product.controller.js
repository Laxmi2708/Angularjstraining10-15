
var controller= catalogmodule.controller('ProductController', function($scope) {
    
    $scope.products = [
        {
            name: "Intel Core i9-10900K",
            price: "$999",
            features: "Intel Core i7, 16GB RAM, 512GB SSD",
            image: "/assets/images/images1.jpeg"
        },
        {
            name: "MacBook Pro 13",
            price: "$1299",
            features: "Apple M1 Chip, 8GB RAM, 256GB SSD",
            image: "/assets/images/images2.jpeg"
        },
        {
            name: "HP Spectre x360",
            price: "$1199",
            features: "Intel Core i7, 16GB RAM, 512GB SSD, 4K Display",
            image: "/assets/images/images3.jpeg"
        },
        {
            name: "Lenovo ThinkPad X1 Carbon",
            price: "$1499",
            features: "Intel Core i7, 16GB RAM, 512GB SSD, 14-inch display",
            image: "/assets/images/images4.jpeg"
        },
        {
            name: "Asus ZenBook 14",
            price: "$799",
            features: "Intel Core i5, 8GB RAM, 512GB SSD",
            image: "/assets/images/images5.jpeg"
        }
    ];

    $scope.cart=[];
    $scope.addToCart=function(product){
        $scope.cart.push(product);
    }
    $scope.addProduct=function(){
        $scope.products.push({
           
            name:$scope.newProduct.name,
            price:$scope.newProduct.price,
            features:$scope.newProduct.features,
            image:$scope.newProduct.image
        });
        $scope.name='';
        $scope.price='';
        $scope.image='';
    }   
    $scope.removeFromCart=function(product){
        const index=$scope.cart.indexOf(product);
        $scope.cart.splice(index,1);
    }
    $scope.getTotal=function(){
        return $scope.cart.reduce((total,product)=>total+product.price,0);
    }
});
