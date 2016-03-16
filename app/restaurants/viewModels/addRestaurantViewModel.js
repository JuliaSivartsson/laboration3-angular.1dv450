app.controller("addRestaurantViewModel", function(restaurantsService, tagsService, $rootScope, $scope, $q, $window, $location, flash, authenticationService) {
    
    var initialize = function(){
      $scope.getAllTags();
      
    };
    
    $scope.addRestaurant = function(){
        $scope.tagNameArray = [];
        angular.forEach($scope.tags, function(tag){
            if (!!tag.selected) $scope.tagNameArray.push(tag);
        });
          
        var values = {
            restaurant: {
                name: $scope.restaurantName, 
                message: $scope.restaurantMessage,
                rating: $scope.restaurantRating,
                
                tags: 
                    angular.forEach($scope.tagNameArray, function(tag){
                        name: tag
                    }),
                
                
                position: {
                    address: $scope.restaurantAddress
                }
            }
        };
        
        restaurantsService.addRestaurant(values, authenticationService.getToken())
          .success(function(data) {
          $location.path('/restaurants');
          flash('alert alert-success', 'Restaurangen har skapats');
            
        }).error(function(data, status) {
          
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
    
    $scope.getAllTags = function(){
        tagsService.getAllTags()
          .success(function(data) {
            $scope.tags = data.tags;
            
        }).error(function(data, status) {
            console.log('error');
        });
    };
    
    initialize();
});