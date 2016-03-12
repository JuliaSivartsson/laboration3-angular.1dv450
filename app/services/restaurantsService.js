app.factory('restaurantsService', function(resourceService, HEROKU) {
    var factory = {};
    
    factory.getAllRestaurants = function(){
      return resourceService.getResource("restaurants");
    };
    
    factory.getOneRestaurant = function(id){
      return resourceService.getResource("restaurants/" + id);
    };
    
    factory.addRestaurant = function(values, token){
        return resourceService.addResource("restaurants", values, {Authorization : token});
    };
    
    factory.updateResource = function(id, token){
        return resourceService.updateResource("restaurants/" + id, {Authorization : token});
    };
    
    factory.deleteRestaurant = function(id, token){
        return resourceService.deleteResource("restaurants/" + id, {Authorization : token});
    };
    
    factory.getRestaurantsForPosition = function(link){
      return resourceService.getResource(link, null, HEROKU);
    };
    
    return factory;
});