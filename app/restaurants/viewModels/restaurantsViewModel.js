app.controller("restaurantsViewModel", function(BASE_URL, API_KEY, HEROKU, $rootScope, $scope, $http, $q, $routeParams, $window, $location) {
    
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
            $scope.selectedRestaurant = restaurant;
            $scope.getTagsForRestaurant(restaurant.links.tags);
            $scope.map.showInfoWindow('myInfoWindow', this);
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
    
    $scope.getAllRestaurants = function() {
        var getConfig = {
            headers: {
              "Accept"   : "application/json",
            }
        };
        
        $http.get(BASE_URL + "restaurants" + "?access_token=" + API_KEY, getConfig).success(function(data) {
            $scope.restaurants = data.restaurants;
        }).error(function(data, status) {
            console.log('error');
        });
    };
  
    $scope.removeTeam = function(team) {
        console.log(team);
    };
      
      Initialize();
});

/*app.controller("restaurantsViewModel", function(BASE_URL, API_KEY, restaurantsService, $rootScope, $scope, $http, $q, $routeParams, $window, $location) {
    
    var vm = this;
    vm.restaurants = restaurantsService.getAllRestaurants();
});*/
