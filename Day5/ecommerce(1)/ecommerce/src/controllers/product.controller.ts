import * as angular from 'angular';

export class ProductController {
  static $inject = ['$scope'];
  message: string;
  catalogs: Array<any>;

  constructor(private $scope: IDataScope) {
    this.message = 'Welcome to TypeScript!';
    this.catalogs = [
      {
        name: "Men's Casual Shirt",
        description: "A stylish and comfortable casual shirt perfect for everyday wear.",
        price: 29.99,
        image: "../images/shirt1.jpg"
      },
      {
        name: "Women's Summer Dress",
        description: "A light and breezy summer dress for those hot days.",
        price: 39.99,
        image: "../images/dress1.jpg"
      },
      {
        name: "Men's Jeans",
        description: "Classic fit jeans with a modern twist.",
        price: 49.99,
        image: "../images/jeans1.jpg"
      },
      {
        name: "Women's Blouse",
        description: "A chic blouse that can be dressed up or down.",
        price: 34.99,
        image: "../images/blouse1.jpg"
      },
      {
        name: "Men's Jacket",
        description: "A versatile jacket for all seasons.",
        price: 79.99,
        image: "../images/jacket1.jpg"
      }
    ];
    
    $scope['data'] = this;
  }
}

angular.module('ecommerce').controller('ProductController', ProductController);
