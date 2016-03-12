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
        
        /*restaurantsService.updateResource($routeParams.restaurantId, authenticationService.getToken())
          .success(function(data) {
            $scope.tags = data.tags;
        });*/
        
        $scope.tagNameArray = [];
        angular.forEach($scope.tags, function(tag){
            if (!!tag.selected) $scope.tagNameArray.push(tag);
        });
          
        console.log($scope.tagNameArray); 
        var values = {
            restaurant: {
                name: $scope.restaurant.name, 
                message: $scope.restaurant.message,
                rating: $scope.restaurant.rating,
                
                /*tags: [
                    angular.forEach($scope.tagNameArray, function(tag){
                        name: tag
                    }),
                ],*/
                
                /*position: {
                    address: $scope.restaurant.position.address
                }*/
            }
        };
        
        console.log(values);
        
        var url = BASE_URL + "restaurants/" + $routeParams.restaurantId +"?access_token=" + API_KEY;
        var config = {
          headers: {
              "Authorization" : authenticationService.getToken(),
              "Accept" : "application/json"
          }
        };
        
        var promise = $http.put(url, values, config);
        
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
    
    initialize();
    
});