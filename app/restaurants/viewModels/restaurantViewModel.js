app.controller("restaurantViewModel", function(BASE_URL, API_KEY, $rootScope, $scope, $http, $q, $routeParams, $window, $location) {
    
    var Initialize = function(){
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
