app.factory('authenticationService', function() {
   var factory = {};
   
   factory.setCurrentUser = function(user) {
       console.log(user.id);
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
   
   factory.getToken = function(){
     return sessionStorage.getItem('token');  
   };
   
   factory.getId = function() {
        return sessionStorage.getItem('userId');
   };
   
   return factory;
});