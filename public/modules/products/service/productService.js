class ProductService {

	constructor($log, $http, $q) {
		this.$log = $log;
		this.$http = $http;
		this.$q = $q;
		this.products = [];
		this.$log.info('product-services loaded');
		this.getProducts = () => {
				let url = 'shopify/get?path=/admin/products.json';
				return this.$http({
					url: url,
					method: 'GET'
				})
				.then((response) => {
					// Any Data Manipulation happens here -
					this.products = response.data.products;
					return this.products;
				}).catch((errorResponse) => {
					return this.$q.reject(errorResponse);
				});
			}
			this.getProducts();

			this.getProductsDetails = (id) => {
					if(this.products.length == 0) {
						this.getProducts();
					}
					this.products.forEach(function(entry) {
								if (entry.id == id) return entry;
							});
					}
			}
}
ProductService.$inject = ['$log', '$http', '$q'];
export default ProductService;
