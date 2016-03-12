app.controller("deleteRestaurantViewModel", function(BASE_URL, API_KEY, HEROKU, $rootScope, $scope, $http, $q, $routeParams, $window, $location, flash, authenticationService, restaurantsService) {

    $scope.deleteRestaurant = function(){
        restaurantsService.deleteRestaurant($routeParams.restaurantId, authenticationService.getToken())
          .success(function(data) {
              $location.path('/restaurants');
              flash('alert alert-success', 'Restaurangen har raderats');
        });
        
        /*var id = $routeParams.restaurantId;
        
        var url = BASE_URL + "restaurants/" + id +"?access_token=" + API_KEY;
        var config = {
          headers: {
              "Authorization" : authenticationService.getToken()
          }
        };
        
        var promise = $http.delete(url, config);
        
        //Adding restaurant did succeed!
        promise.success(function(data, status, headers, config) {
          $location.path('/restaurants');
          flash('alert alert-success', 'Restaurangen har raderats');
        });
        
        // Adding restaurant did not succeed
        promise.error(function(data, status, headers, config) {
            flash('alert alert-error', 'Något gick fel när restaurangen skulle raderas!');
          console.log(data);
          console.log(status);
        });*/
    };
    
});