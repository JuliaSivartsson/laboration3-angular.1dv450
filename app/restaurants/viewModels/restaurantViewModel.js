app.controller("restaurantViewModel", function($scope, $q, authenticationService, restaurantsService, tagsService, $routeParams, $window, $location) {
    
    var initialize = function(){
        $scope.getRestaurant($routeParams.restaurantId);
    };
    
    $scope.getRestaurant = function(id) {
        restaurantsService.getOneRestaurant(id)
          .success(function(data) {
            $scope.restaurant = data.restaurant;
            $scope.getTags($scope.restaurant.links.tags);
            
            //Check if logged in user created this restaurant
            $scope.isOwner = authenticationService.isOwner($scope.restaurant);
        })
        .error(function(data, status) {
            console.log('error');
        });
    };
    
    $scope.getTags = function(link){
        tagsService.getTagsForRestaurant(link)
          .success(function(data) {
            $scope.tags = data.tags;
        })
        .error(function(data, status) {
            console.log('error');
        });
    };
      
      initialize();
});