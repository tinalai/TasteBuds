tastebuds.controller('profileController', function($scope, $http) {
    $scope.profile = {
        username: users.username,
        posts: [],
        wantToEat: []
    }
    $scope.getPosts = $http.get({
        method: 'GET',
        url: '/posts'
    }).then(function(posts) {
        return posts;
    })
    $scope.getEats = $http.get({
        method: 'GET',
        // can this url be directed at the getEats row in the posts table?
        url: '/posts'
    }).then(function(eat) {
        wantToEat.push(eat)
    })
    $scope.
    // do the get request in a factory! define your functions, like
    // var getPosts = function() {
        // http.get({ posts })}
    //build a get request that gets posts that matches the username
});