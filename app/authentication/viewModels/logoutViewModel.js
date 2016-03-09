app.controller("logoutViewModel", function ($rootScope, authenticationService, $location) {
    $rootScope.currentUser = null;
    authenticationService.setCurrentUser({});
    $location.path('/');
});