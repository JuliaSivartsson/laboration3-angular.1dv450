app.controller("loginViewModel", function (BASE_URL, API_KEY, $rootScope, $scope, $http, $q, $routeParams, $window, $location, HEROKU ) {

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
          console.log(data);
          console.log(status);
          
          //JWT token is returned
          $rootScope.token = data.auth_token;
          $rootScope.isLoggedIn = true;
        });
        // Login did not succeed
        promise.error(function(data, status, headers, config) {
          console.log(data);
          console.log(status);
          $rootScope.token = "Email eller lösenord var fel! :(";
          $rootScope.isLoggedIn = false;
        });
    };
});
