app.controller("positionsViewModel", function ($scope, $q, $window, positionsService) {
    
    var initialize = function(){
        $scope.getAllPositions();
    };
    
    $scope.getAllPositions = function() {
        positionsService.getAllPositions()
            .success(function(data) {
                $scope.positions = data.positions;
            })
            .error(function(data, status) {
                console.log('error');
            });
    };
    
    initialize();
});
