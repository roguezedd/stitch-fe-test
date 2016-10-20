import angular from 'angular';
import ProductController from './controller/ProductController';
import ProductService from './service/ProductService';

let path = './modules/products/';

let ProductModule = angular.module('ProductModule', [
	'ui.router'
])

	// Controllers
	.controller('ProductController', ProductController)
	.service('ProductService', ProductService)
	// Routes
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		

		$stateProvider
				.state('product', {
					url: '/products',
					controller: 'ProductController',
					templateUrl: path + 'view/product.html',
					controllerAs: 'p'
				});
	}]);

export default ProductModule;
