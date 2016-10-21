
'use strict';
class DetailController
{
	constructor($stateParams, $state, $scope, $log, $timeout, ProductService) {
		this.$scope = $scope;
		this.productService = ProductService;
		let productArray = this.productService.products;
		//Case where the user wants to reload with a product id directly.
		if(productArray.length == 0 && $stateParams.id != null){
			this.productService.getProducts();
			$stateParams.id = '';
			$state.transitionTo($state.current, $stateParams, {reload:false, inherit:false});
		}

		let returnObj = productArray[0];
		productArray.forEach(function(entry) {
					if (entry.id == (parseInt($stateParams.id))) {
						returnObj = entry;
					}
				});
		this.detail = returnObj;
		this.$scope.detail = returnObj;
    this.gridOptions = {
        data: 'detail'
    };
	}
}
DetailController.$inject = ['$stateParams', '$state', '$scope', '$log', '$timeout', 'ProductService'];
export default DetailController;
