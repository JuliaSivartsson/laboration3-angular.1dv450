app.controller("searchRestaurantsViewModel", function(flash, BASE_URL, API_KEY, $rootScope, $scope, $http, $q, $routeParams, $window, $location) {
    
    $scope.searchRestaurant = function(){
      var getConfig = {
            headers: {
              "Accept"   : "application/json",
            }
        };
        
        var url = BASE_URL + "restaurants?query=" + $scope.query + "&access_token=" + API_KEY;
        console.log(url);
        console.log($scope.query);
        
        $http.get(url, getConfig).success(function(data) {
            $scope.restaurants = data.restaurants;
            if(data.error){
                $scope.message = data.error;
            }
            else{
                $scope.message = "";
            }
            
        }).error(function(data, status) {
            console.log('error');
        });  
    };
});