app.controller("restaurantsViewModel", function(BASE_URL, API_KEY, $rootScope, $scope, $http, $q, $routeParams, $window, $location) {
    
    var Initialize = function(){
        $scope.getAllRestaurants();    
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
    
    $scope.getOneRestaurant = function(id) {
        
    };
      
      Initialize();
});

/*app.controller("restaurantsViewModel", function(BASE_URL, API_KEY, restaurantsService, $rootScope, $scope, $http, $q, $routeParams, $window, $location) {
    
    var vm = this;
    vm.restaurants = restaurantsService.getAllRestaurants();
});*/
