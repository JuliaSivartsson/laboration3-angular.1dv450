app.controller("editRestaurantViewModel", function(BASE_URL, API_KEY, HEROKU, $rootScope, $scope, $http, $q, $routeParams, $window, $location, flash, authenticationService, restaurantsService, tagsService) {

    var initialize = function(){
        $scope.getRestaurant();
        $scope.getAllTags();
    };
    
    $scope.getRestaurant = function() {
        restaurantsService.getOneRestaurant($routeParams.restaurantId)
            .success(function(data) {
                $scope.restaurant = data.restaurant;
                $scope.getTags($scope.restaurant.links.tags);
            });
    };
    
    $scope.getAllTags = function(){
        tagsService.getAllTags()
          .success(function(data) {
            $scope.allTags = data.tags;
        });
    };
    
    $scope.getTags = function(link){
        tagsService.getTagsForRestaurant(link)
          .success(function(data) {
            $scope.tags = data.tags;
        });
    };
    
    $scope.updateRestaurant = function(){
        var values = {
            restaurant: {
                name: $scope.restaurant.name, 
                message: $scope.restaurant.message,
                rating: $scope.restaurant.rating
            }
        };
        
        restaurantsService.updateResource(values, $routeParams.restaurantId, authenticationService.getToken())
        .success(function(data) {
              $location.path('/restaurants');
              flash('alert alert-success', 'Restaurangen har uppdaterats!');
        })
        // Adding restaurant did not succeed
        .error(function(data, status) {
            
          //Error messages  
          if (data.rating == "is not a number"){
              flash('alert alert-danger', 'Betyget måste vara en siffra!');
          }
          else if(data.rating == "must be greater than 0" || data.rating == "must be less than or equal to 5"){
              flash('alert alert-danger', 'Betyget måste vara mellan 1-5!');
          }
          else{
            flash('alert alert-danger', 'Alla fält utom taggar är obligatoriska!');
          }    
        });
    };
    
    initialize();
    
});