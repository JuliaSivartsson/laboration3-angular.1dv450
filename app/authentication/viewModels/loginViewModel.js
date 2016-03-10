app.controller("loginViewModel", function (flash, BASE_URL, API_KEY, $rootScope, authenticationService, $scope, $http, $q, $routeParams, $window, $location, HEROKU ) {

      $scope.loginUser = function() {
        var values = {
            auth: {
                email: $scope.userEmail, 
                password: $scope.userPassword
            }
        };
        
        var url = HEROKU + "/knock/auth_token";
        var config = {
          headers: {
              "Accept" : "application/json"
          }
        };
        
        var promise = $http.post(url, values, config);

        //Login did succeed!
        promise.success(function(data, status, headers, config) {
          
          var currentUser = {
            id: $scope.userEmail,
            name: $scope.userPassword,
            token: data.jwt,
            authorized: true
          };
          
          authenticationService.setCurrentUser(currentUser);
          $location.path('/');
          flash('alert alert-success', 'Välkommen!');
        });
        
        console.log(promise.error);
        // Login did not succeed
        promise.error(function(data, status, headers, config) {
          flash('alert alert-danger', 'Fel inloggningsuppgifter');
        });
    };
});
