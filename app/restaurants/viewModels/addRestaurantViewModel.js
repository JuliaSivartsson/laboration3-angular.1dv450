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
          flash('alert alert-danger', 'Alla fält måste fyllas i!');
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