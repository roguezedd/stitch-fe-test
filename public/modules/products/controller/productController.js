
'use strict';

class ProductController
{
	constructor($stateParams, $scope, $log, $timeout, ProductService) {
    this.products = [];
    this.productService = ProductService;
    this.productService.getProducts().then((response) => {
					this.products = response.products;
				}, (errorResponse) => {
					this.$log.error('Could not update workscope', errorResponse);
				}
      );
    }
}
ProductController.$inject = ['$stateParams', '$scope', '$log', '$timeout', 'ProductService'];
export default ProductController;
