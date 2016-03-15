app.controller("mainViewModel", function(HEROKU, BASE_URL, API_KEY, $rootScope, $scope, authenticationService, $http, $q, $routeParams, $window, $location) {
   $scope.authenticated = false;
   
   $scope.$watch(authenticationService.authenticated, function(value){
     $scope.authenticated = value;
   });
   
   $scope.$watch(authenticationService.getId, function(value){
     $scope.hejsan = value;
   });
});