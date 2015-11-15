var app = angular.module('products', []);

app.controller('ProductController', function($scope, $http, $window) {


  $http.get('/shopify/get?path=/admin/products.json').success(function(data) {
                    $scope.items = data;
                    $scope.products = $scope.items.products;
                    
                });

  $scope.selectProduct = function(productid) {
  	             

    $http.get('/shopify/get?path=/admin/products/'+ productid+'.json').success(function(data) {
                    $scope.singleProduct = data['product'];
                    console.log($scope.singleProduct);
                });
  }


  $scope.deleteProduct = function(productid) {
  	$http.delete('/shopify/DELETE?path=/admin/products/'+ productid +'.json').success(function() {
                    $window.location.reload();
                   
                });
  }


})


 app.controller('GalleryController', function($scope){
    $scope.current = 0;
    $scope.setCurrent = function(newGallery){
    $scope.current = newGallery || 0;
    };
  });



 app.controller('TabController', function($scope){
    $scope.tab = 1;

    $scope.setTab = function(newValue){
      $scope.tab = newValue;
    };

    $scope.isSet = function(tabName){
      return $scope.tab === tabName;
    };
  });