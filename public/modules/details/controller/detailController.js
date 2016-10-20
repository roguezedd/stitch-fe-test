
'use strict';
class DetailController
{
	constructor($stateParams, $scope, $log, $timeout, ProductService) {
    this.products = [];
    this.productService = ProductService;
    }
}
DetailController.$inject = ['$stateParams', '$scope', '$log', '$timeout', 'ProductService'];
export default DetailController;
