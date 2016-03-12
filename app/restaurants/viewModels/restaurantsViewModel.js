app.controller("restaurantsViewModel", function($rootScope, $scope, $q, $window, $location, flash, authenticationService, restaurantsService) {
    
    var Initialize = function(){
        $scope.getAllRestaurants();
        $scope.mapOperators();
    };
    
    // Gives the maps its start position.
    $scope.mapOperators = function () {
        $scope.mapBox = {
            center: [57.0, 14.1],
            zoom: 8,
        };
    };
    
    $scope.openMarker = function(event, r){
        $scope.mapBox = {
            center: [r.position.latitude, r.position.longitude],
            zoom: 18,
        };
        
        //$scope.showInfo(event, r);
    };
    
    $scope.showInfo = function(event, restaurant) {
            $scope.selectedAddress = restaurant.position;
            $scope.getRestaurants($scope.selectedAddress.links.restaurants);
            $scope.map.showInfoWindow('myInfoWindow', this);
    };
    
    $scope.isOwner = function(restaurant){
        return authenticationService.isOwner(restaurant);
    };
    
    $scope.getRestaurants = function(link) {
        restaurantsService.getRestaurantsForPosition(link)
          .success(function(data) {
            $scope.selectedRestaurants = data.restaurants;
        });
    };
    
    $scope.getAllRestaurants = function() {
        restaurantsService.getAllRestaurants()
          .success(function(data) {
            $scope.restaurants = data.restaurants;
        });
    };
  
    Initialize();
});