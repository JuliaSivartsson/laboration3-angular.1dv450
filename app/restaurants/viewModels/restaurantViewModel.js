app.controller("restaurantViewModel", function(flash, HEROKU, $rootScope, $scope, $q, authenticationService, restaurantsService, tagsService, $routeParams, $window, $location) {
    
    var initialize = function(){
        $scope.getRestaurant($routeParams.restaurantId);
    };
    
    $scope.isOwner = function(restaurant){
        return authenticationService.isOwner(restaurant);
    };
    
    $scope.getRestaurant = function(id) {
        restaurantsService.getOneRestaurant(id)
          .success(function(data) {
            $scope.restaurant = data.restaurant;
            $scope.getTags($scope.restaurant.links.tags);
        });
    };
    
    $scope.getTags = function(link){
        tagsService.getTagsForRestaurant(link)
          .success(function(data) {
            $scope.tags = data.tags;
        });
    };
      
      initialize();
});