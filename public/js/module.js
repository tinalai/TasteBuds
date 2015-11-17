tastebuds = angular.module('tastebuds', [
  'ui.router',
  'feedController',
  'landingController',
  'profileController',
  'uploadController'
]);

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  ​
  $stateProvider
  .state('post', {
    url: '/post',
    templateUrl: 'views/feed.html',
    controller: 'feedController'
  });

}]);
});
