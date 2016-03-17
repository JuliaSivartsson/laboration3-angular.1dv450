app.controller("tagsViewModel", function ($scope, $q, $routeParams, tagsService, $window, $location) {
    
    var initialize = function(){
        $scope.getAllTags();
    };
    
    $scope.getAllTags = function() {
        tagsService.getAllTags()
          .success(function(data) {
            $scope.tags = data.tags;
        });
    };
    
    initialize();
});
