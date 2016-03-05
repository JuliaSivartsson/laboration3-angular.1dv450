app.controller("tagViewModel", function(BASE_URL, API_KEY, HEROKU, $rootScope, $scope, $http, $q, $routeParams, $window, $location) {
    
    var Initialize = function(){
        $scope.getTag($routeParams.tagId);
        
    };
    
    $scope.getTag = function(id) {
        var getConfig = {
            headers: {
              "Accept"   : "application/json",
            }
        };
        
        $http.get(BASE_URL + "tags/" + id + "?access_token=" + API_KEY, getConfig).success(function(data) {
            $scope.tag = data.tag;
            $scope.getRestaurants($scope.tag.links.restaurants);
        
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
