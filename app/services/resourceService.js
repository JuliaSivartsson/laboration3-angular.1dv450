app.factory('resourceService', function($http) {
    var factory = {};
    
  factory.getResource = function() {
    //console.log('hej');

    /*var getConfig = {
        headers: {
          "Accept"   : "application/json",
        }
    };*/
    
    return 'hej';
  };
    
    //Get resource from API
    /*factory.getResource = function(resource, params){
          var getConfig = {
            headers: {
              "Accept"   : "application/json",
            }
          };
          
          $http.get(BASE_URL + resource + "?access_token=" + API_KEY, getConfig).success(function(data) { return data.restaurants;
            
          });
    };*/
});
