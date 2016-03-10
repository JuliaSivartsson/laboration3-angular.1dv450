app.controller("modifyRestaurantViewModel", function(BASE_URL, API_KEY, HEROKU, $rootScope, $scope, $http, $q, $routeParams, $window, $location, flash, authenticationService) {
    
    var initialize = function(){
      $scope.getAllTags();  
    };
    
    $scope.addRestaurant = function(){
        
        console.log($scope.restaurantTags);
        var values = {
            restaurant: {
                name: $scope.restaurantName, 
                message: $scope.restaurantMessage,
                rating: $scope.restaurantRating,
                
                position: {
                    address: $scope.restaurantAddress
                }
            }
        };
        
        var url = BASE_URL + "restaurants?access_token=" + API_KEY;
        var config = {
          headers: {
              "Authorization" : authenticationService.getToken(),
              "Accept" : "application/json"
          }
        };
        
        var promise = $http.post(url, values, config);
        
        //Adding restaurant did succeed!
        promise.success(function(data, status, headers, config) {
          $location.path('/restaurants');
          flash('alert alert-success', 'Restaurangen har skapats');
        });
        
        // Adding restaurant did not succeed
        promise.error(function(data, status, headers, config) {
          flash('alert alert-danger', 'Alla fält måste fyllas i!');
        });
    };
    
    $scope.getAllTags = function(){
        var getConfig = {
            headers: {
              "Accept"   : "application/json",
            }
        };
        
        $http.get(BASE_URL + "tags" + "?access_token=" + API_KEY, getConfig).success(function(data) {
            $scope.tags = data.tags;
        
        }).error(function(data, status) {
            console.log('error');
        });
    };
    
    initialize();
});