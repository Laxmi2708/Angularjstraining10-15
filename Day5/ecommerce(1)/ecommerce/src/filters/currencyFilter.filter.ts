import * as angular from 'angular';

export function currencyFilter(): angular.IFilterFunction {
    return function(input: number): string {
        return '$' + input.toFixed(2);
    };
}

angular.module('ecommerce').filter('currencyFilter', currencyFilter);
