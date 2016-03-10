app.controller("logoutViewModel", function (flash, $rootScope, authenticationService, $location) {
    $rootScope.currentUser = null;
    authenticationService.setCurrentUser({});
    $location.path('/');
    flash('alert alert-info', 'Hejdå! :)');
});