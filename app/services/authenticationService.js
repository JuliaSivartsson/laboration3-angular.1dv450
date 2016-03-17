app.factory('authenticationService', function(HEROKU, $http) {
   var factory = {};
   
   factory.setCurrentUser = function(user) {
       sessionStorage.setItem('userId', user.id);
       sessionStorage.setItem('token', user.token);
   };
   
   factory.authenticated = function() {
       var currentUserId = sessionStorage.getItem('userId');
       return currentUserId !== null && currentUserId !== "undefined";
   };
   
   factory.isOwner = function(restaurant){
        if(restaurant.creator.email === factory.getId()){
            return true;
        }
        else{
            return false;
        }
   };
   
   factory.loginUser = function(values){
        var url = HEROKU + "/knock/auth_token";
        return $http.post(url, values, {
        });
   };
   
   factory.getToken = function(){
     return sessionStorage.getItem('token');  
   };
   
   factory.getId = function() {
        return sessionStorage.getItem('userId');
   };
   
   return factory;
});