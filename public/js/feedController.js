angular.module('feed', [])

.controller('feedController', function($scope, $http) {
  var postPicture = $http({
    method: 'GET',
    url: '/posts'
  }).then(function(response) {
    // when the response is available
    if (response) {
      console.log($scope.image);
      $scope.image = response.data;
    }
  }, function errorCallback(error) {
    // or server returns response with an error status.
    //run error
    if (error) {
      console.log('feedController error!');
    }
  });
});
