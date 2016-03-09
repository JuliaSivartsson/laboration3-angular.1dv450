app.factory('authenticationService', function() {
   var factory = {};
   
   factory.setCurrentUser = function(user) {
       console.log(user);
       sessionStorage.setItem('userId', user.id);
       sessionStorage.setItem('token', user.token);
   };
   
   factory.authenticated = function() {
       var currentUserId = sessionStorage.getItem('userId');
       return currentUserId !== null && currentUserId !== "undefined";
   };
   
   factory.getToken = function(){
     return sessionStorage.getItem('token');  
   };
   
   factory.getId = function() {
        return sessionStorage.getItem('userId');
   };
   
   return factory;
});