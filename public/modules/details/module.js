import angular from 'angular';
import DetailController from './controller/DetailController';
import DetailService from './service/DetailService';

let path = './modules/details/';

let DetailModule = angular.module('DetailModule', [
	'ui.router'
])

	// Controllers
	.controller('DetailController', DetailController)
	.service('DetailService', DetailService)
	// Routes
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {


		$stateProvider
				.state('product.detail', {
					url: '/details',
					controller: 'DetailController',
					templateUrl: path + 'view/detail.html',
					controllerAs: 'detail'
				});
	}]);

export default DetailModule;
