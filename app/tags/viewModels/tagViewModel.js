app.controller("tagViewModel", function(tagsService, restaurantsService, $scope, $q, $routeParams, $window, $location) {
    
    var Initialize = function(){
        $scope.getTag($routeParams.tagId);
        
    };
    
    $scope.getTag = function(id) {
        tagsService.getOneTag(id)
          .success(function(data) {
            $scope.tag = data.tag;
            $scope.getRestaurants($scope.tag.links.restaurants);
        })
        .error(function(data, status) {
            console.log('error');
        });
    };
    
    $scope.getRestaurants = function(link){
        restaurantsService.getRestaurantsByLink(link)
          .success(function(data) {
            $scope.restaurants = data.restaurants;
        })
        .error(function(data, status) {
            console.log('error');
        });
    };
      
    Initialize();
});