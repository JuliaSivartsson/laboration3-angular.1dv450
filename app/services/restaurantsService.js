app.factory('restaurantsService', function(BASE_URL, API_KEY, $http) {
    var factory = {};
    
    //Get resource from API
    factory.getAllRestaurants = function(){ 

    var playerList = [
      {id: 1, name: "Harry Kane", age: 21, selfurl: "http://blue-white-harbor-95-185765.euw1-2.nitrousbox.com/demo02/players/1"},
      {id: 2, name: "Lotta Schelin", age: 28, selfurl: "http://blue-white-harbor-95-185765.euw1-2.nitrousbox.com/demo02/players/2"},
      {id: 3, name: "Hugo Loris", age: 27, selfurl:"http://blue-white-harbor-95-185765.euw1-2.nitrousbox.com/demo02/players/3" }
    ];
  
  
        return {
          get: function() {
            return playerList;     
          },
          
          getPlayer: function(id) {
          
            // here we should ask the API for a specific player
            var result = playerList.filter(function(p) {
               return p.id.toString() === id.toString(); // filter out appropriate one
            })[0]; // get result and access the first (should be the only in this case) element
    
            return result;
          }
        }
    };
    
        /*var params = Object.assign({ access_token: API_KEY }, resourceParams);
        var url = baseUrl == undefined ? BASE_URL : baseUrl;
        
        return (url + resource, {
            params: params
        });
        */
        //return $http.get(BASE_URL + "restaurants" + "?access_token=" + API_KEY, getConfig, { params: params});

});