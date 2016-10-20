class ProductService {

	constructor($log, $http, $q) {
		this.$log = $log;
		this.$http = $http;
		this.$q = $q;
		this.$log.info('product-services loaded');
	}
  getProducts() {
			let url = 'shopify/get?path=/admin/products.json';
			return this.$http({
				url: url,
				method: 'GET'
			})
			.then((response) => {
				// Any Data Manipulation happens here -
				return response.data;
			}).catch((errorResponse) => {
				return this.$q.reject(errorResponse);
			});
		}
  }
ProductService.$inject = ['$log', '$http', '$q'];
export default ProductService;
