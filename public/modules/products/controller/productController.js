
'use strict';

class ProductController
{
	constructor($stateParams, $scope, $log, $timeout, ProductService) {
		this.$scope = $scope;
		this.products = [];
		this.detail = {};
    this.productService = ProductService;
    this.productService.getProducts().then((response) => {
					this.products = response;
				}, (errorResponse) => {
					this.$log.error('Could not update workscope', errorResponse);
				}
      );
		/*this.getProductsDetails = (id) => {
				this.detail = this.productService.getProductsDetails(id);
		}; */
  }
}
ProductController.$inject = ['$stateParams', '$scope', '$log', '$timeout', 'ProductService'];
export default ProductController;
