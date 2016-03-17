app.controller("positionViewModel", function(BASE_URL, API_KEY, HEROKU, $rootScope, authenticationService, positionsService, restaurantsService, tagsService, $scope, $http, $q, $routeParams, $window, $location) {
    
    var Initialize = function(){
        $scope.getPosition($routeParams.positionId);
        $scope.mapOperators();
    };
    
    // Gives the maps its start position.
    $scope.mapOperators = function () {
        $scope.mapBox = {
            center: [57.0, 14.1],
            zoom: 14,
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
    
    $scope.getPosition = function(id) {
        positionsService.getOnePosition(id)
          .success(function(data) {
            $scope.position = data.position;
            $scope.getRestaurants($scope.position.links.restaurants);
        });
    };
    
    $scope.getTagsForRestaurant = function(link){
        tagsService.getTagsForRestaurant(link)
          .success(function(data) {
            $scope.selectedTags = data.tags;
        });
    };
    
    $scope.getRestaurants = function(link){
        restaurantsService.getRestaurantsByLink(link)
          .success(function(data) {
            $scope.restaurants = data.restaurants;
        });
    };
      
      Initialize();
});
