app.controller("loginViewModel", function (flash, authenticationService, $scope, $q, $window, $location) {

      $scope.loginUser = function() {
        var values = {
            auth: {
                email: $scope.userEmail, 
                password: $scope.userPassword
            }
        };
        
        authenticationService.loginUser(values)
          //Successful login
          .success(function(data){
            var currentUser = {
              id: $scope.userEmail,
              name: $scope.userPassword,
              token: data.jwt,
              authorized: true
            };
            
            authenticationService.setCurrentUser(currentUser);
            $location.path('/');
            flash('alert alert-success', 'Välkommen!');
          })
          //Unsuccessful login
          .error(function(){
            flash('alert alert-danger', 'Fel inloggningsuppgifter');
          });
    };
});
