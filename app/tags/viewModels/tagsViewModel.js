app.controller("tagsViewModel", function ($rootScope, $scope, $http, $q, $routeParams, $window, $location, BASE_URL, API_KEY) {
    
    var initialize = function(){
        $scope.getAllTags();
    };
    
    $scope.getAllTags = function() {
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
