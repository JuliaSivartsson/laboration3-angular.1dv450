app.controller("positionViewModel", function(BASE_URL, API_KEY, HEROKU, $rootScope, authenticationService, $scope, $http, $q, $routeParams, $window, $location) {
    
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
        console.log('hej');
        $scope.mapBox = {
            center: [r.position.latitude, r.position.longitude],
            zoom: 18,
        };
        
        //$scope.showInfo(event, r);
    };
    
    $scope.showInfo = function(event, restaurant) {
            $scope.selectedRestaurant = restaurant;
            console.log($scope.selectedRestaurant);
            //$scope.getTagsForRestaurant(restaurant.links.tags);
            $scope.map.showInfoWindow('popupInfo', this);
    };
    
    $scope.getPosition = function(id) {
        var getConfig = {
            headers: {
              "Accept"   : "application/json",
            }
        };
        
        $http.get(BASE_URL + "positions/" + id + "?access_token=" + API_KEY, getConfig).success(function(data) {
            $scope.position = data.position;
            $scope.getRestaurants($scope.position.links.restaurants);
        
        }).error(function(data, status) {
            console.log('error');
        });
    };
    
    $scope.getTagsForRestaurant = function(link){
        var getConfig = {
            headers: {
              "Accept"   : "application/json",
            }
        };
        
        $http.get(HEROKU + link + "?access_token=" + API_KEY, getConfig).success(function(data) {
            $scope.selectedTags = data.tags;
        
        }).error(function(data, status) {
            console.log('error');
        });
    };
    
    $scope.getRestaurants = function(link){
        var getConfig = {
            headers: {
              "Accept"   : "application/json",
            }
        };
        
        $http.get(HEROKU + link + "?access_token=" + API_KEY, getConfig).success(function(data) {
            console.log(data);
            $scope.restaurants = data.restaurants;
        
        }).error(function(data, status) {
            console.log('error');
        });
    };
      
      Initialize();
});

/*app.controller("restaurantsViewModel", function(BASE_URL, API_KEY, restaurantsService, $rootScope, $scope, $http, $q, $routeParams, $window, $location) {
    
    var vm = this;
    vm.restaurants = restaurantsService.getAllRestaurants();
});*/
