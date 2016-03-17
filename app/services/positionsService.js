app.factory('positionsService', function(resourceService) {
    var factory = {};
    
    factory.getAllPositions = function(){
        return resourceService.getResource("positions");
    };
    
    factory.getOnePosition = function(id){
        return resourceService.getResource("positions/" + id);
    };
    
    return factory;
});