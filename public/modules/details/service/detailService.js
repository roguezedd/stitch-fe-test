class DetailService {

	constructor($log, $http, $q) {
		this.$log = $log;
		this.$http = $http;
		this.$q = $q;
		this.$log.info('detail-services loaded');
	}
}
DetailService.$inject = ['$log', '$http', '$q'];
export default DetailService;
