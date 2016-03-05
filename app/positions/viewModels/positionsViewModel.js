app.controller("positionsViewModel", function ($rootScope, $scope, $http, $q, $routeParams, $window, $location, BASE_URL, API_KEY) {
    
    var initialize = function(){
        $scope.getAllPositions();
    };
    
    $scope.getAllPositions = function() {
        var getConfig = {
            headers: {
              "Accept"   : "application/json",
            }
        };
        
        $http.get(BASE_URL + "positions" + "?access_token=" + API_KEY, getConfig).success(function(data) {
            $scope.positions = data.positions;
        
        }).error(function(data, status) {
            console.log('error');
        });
    };
    
    initialize();
    
});
