app.controller("restaurantsViewModel", function($rootScope, $scope, $q, $window, $location, authenticationService, restaurantsService, tagsService) {
    
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
        restaurantsService.getRestaurantsByLink(link)
          .success(function(data) {
            $scope.selectedRestaurants = data.restaurants;
        })
        .error(function(data, status) {
            console.log('error');
        });
    };
    
    $scope.getAllRestaurants = function() {
        restaurantsService.getAllRestaurants()
          .success(function(data) {
            $scope.restaurants = data.restaurants;
        })
        .error(function(data, status) {
            console.log('error');
        });
    };
  
    Initialize();
});