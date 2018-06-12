export function routerConfig ($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/', {
      templateUrl: 'app/shop/shop.html',
      controller: 'ShopController',
      controllerAs: 'main'
    })
    .when('/main', {
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .otherwise({
      redirectTo: '/'
    });
}
