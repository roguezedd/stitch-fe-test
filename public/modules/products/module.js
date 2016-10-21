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
					url: '/product',
					'abstract': true,
					controller: 'ProductController',
					templateUrl: path + 'view/product.html',
					controllerAs: 'product'
				});
	}]);

export default ProductModule;
