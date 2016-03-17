app.factory('tagsService', function(resourceService, HEROKU) {
    var factory = {};
    
    factory.getAllTags = function(){
        return resourceService.getResource("tags");
    };
    
    factory.getOneTag = function(id){
        return resourceService.getResource("tags/" + id);  
    };
    
    factory.getTagsForRestaurant = function(link){
        return resourceService.getResource(link, null, HEROKU);
    };
    
    return factory;
});