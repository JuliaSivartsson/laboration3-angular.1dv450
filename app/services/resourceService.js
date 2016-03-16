app.factory('resourceService', function($http, BASE_URL, API_KEY) {
    var factory = {};

    //Get resource from API
    factory.getResource = function(urlToResource, resourceParams, baseUrl){
        var params = Object.assign({ access_token: API_KEY }, resourceParams);
        var url = baseUrl == undefined ? BASE_URL : baseUrl;
    
        return $http.get(url + urlToResource, {
          params: params
        });
    };
    
    factory.addResource = function(urlToResource, values, headers){
        var params = Object.assign({ access_token: API_KEY });
        
        return $http.post(BASE_URL + urlToResource, values, {
          headers: headers,
          params: params
        });
    };
    
    factory.updateResource = function(urlToResource, values, headers){
        var params = Object.assign({ access_token: API_KEY });

    
        return $http.put(BASE_URL + urlToResource, values, {
          headers: headers,
          params: params
        });
    };
    
    factory.deleteResource = function(urlToResource, headers){
        var params = Object.assign({ access_token: API_KEY });
    
        return $http.delete(BASE_URL + urlToResource, {
          headers: headers,
          params: params
        });
    };
    
    return factory;
});
