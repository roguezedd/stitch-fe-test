export class ShopController {
  constructor ($timeout, $http, webDevTec, toastr) {
    'ngInject';
    this.products = [];
    this.selectedProduct = null;
    this.error = '';
    this.selected = null;
    
    this.$http = $http;
    this.toastr = toastr;
    this.getData();
  }

  getData() {
    var self = this;
    this.$http({
      method: 'GET',
      url: 'http://localhost:3030/shopify/get?path=/admin/products.json'
    }).then(function successCallback(response) {
      self.products = response.data.products;
      self.selectedProduct = self.products[0];
    }, function errorCallback(response) {
      self.error = 'Error: ' + response.statusText + 'with code: ' +response.status;
    });
  }

  isSelected(id) {
    return this.selected == id;
  }

  closeAlert(i) {
    this.error = "";
  }

}
