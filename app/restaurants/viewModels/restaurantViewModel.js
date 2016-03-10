app.controller("restaurantViewModel", function(flash, HEROKU, BASE_URL, API_KEY, $rootScope, $scope, $http, $q, $routeParams, $window, $location) {
    
    var initialize = function(){
        $scope.getRestaurant($routeParams.restaurantId);    
    };
    
    $scope.getRestaurant = function(id) {
        var getConfig = {
            headers: {
              "Accept"   : "application/json",
            }
        };
        
        $http.get(BASE_URL + "restaurants/" + id + "?access_token=" + API_KEY, getConfig).success(function(data) {
            $scope.restaurant = data.restaurant;
            console.log(data);
            $scope.getTags($scope.restaurant.links.tags);
        
        }).error(function(data, status) {
            console.log('error');
        });
    };
    
    $scope.getTags = function(link){
        var getConfig = {
            headers: {
              "Accept"   : "application/json",
            }
        };
        
        $http.get(HEROKU + link + "?access_token=" + API_KEY, getConfig).success(function(data) {
            $scope.tags = data.tags;
        
        }).error(function(data, status) {
            console.log('error');
        });
    };
      
      initialize();
});

/*app.controller("restaurantsViewModel", function(BASE_URL, API_KEY, restaurantsService, $rootScope, $scope, $http, $q, $routeParams, $window, $location) {
    
    var vm = this;
    vm.restaurants = restaurantsService.getAllRestaurants();
});*/
