import * as angular from 'angular';

export function productCard(): angular.IDirective {
    return {
        restrict: 'E',
        scope: {
            product: '='
        },
        template: `
            <div class="product">
                <img ng-src="{{product.image}}" alt="{{product.name}}">
                <h2>{{product.name}}</h2>
                <p>{{product.description}}</p>
                <a href="#!/details" class="btn">View Product</a>
            </div>
        `
    };
}

angular.module('ecommerce').directive('productCard', productCard);
