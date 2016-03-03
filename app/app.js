var app = angular.module("app", ['ngRoute'])
  .config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
      $routeProvider.
        when('/', { templateUrl: 'app/home/views/indexView.html' }).
        when('/restaurants', { templateUrl: 'app/restaurants/views/restaurantsView.html', controller: 'restaurantsViewModel', controllerAs: 'restaurants' }).
        when('/restaurant/:id', { templateUrl: 'views/player-detail.html', controller: 'restaurantViewModel', controllerAs: 'restaurants' }).
        when('/tags', { templateUrl: 'app/tags/views/tagsView.html', controller: 'tagsViewModel', controllerAs: 'tags' }).
        when('/tag/:id', { templateUrl: 'views/player-detail.html', controller: 'tagViewModel', controllerAs: 'tags' }).
        
        when('/login', { templateUrl: 'app/authentication/views/loginView.html', controller: 'loginViewModel', controllerAs: 'login' }).
        otherwise({ redirectTo: '/' });
      $locationProvider.html5Mode(true); // This removes the hash-bang and use the Session history management >= IE10

    }]);

/*
var app = angular.module("app", ['ngRoute']);
    
app.config(function($routeProvider, $locationProvider, $stateProvider, $urlRouteProvider) {
  $stateProvider
    .state('home', { url: '/', templateUrl: 'app/home/views/indexView.html', authenticate: false})
    .state('login', { url: '/login', templateUrl: 'app/home/views/indexView.html', authenticate: false})
    .state('logout', { url: '/logout', templateUrl: 'app/home/views/indexView.html', authenticate: false})
    .state('restaurants', { url: '/', templateUrl: 'app/home/views/indexView.html', authenticate: false})
    .state('restaurant', { url: '/', templateUrl: 'app/home/views/indexView.html', authenticate: false})
    .state('user', { url: '/', templateUrl: 'app/home/views/indexView.html', authenticate: false})
    .state('delete-restaurant', { url: '/', templateUrl: 'app/home/views/indexView.html', authenticate: false});
    
    $urlRouteProvider.otherwise("/");
    $locationProvider.html5Mode(true); // This removes the hash-bang and use the Session history management >= IE10
});

// Access control for routes
app.run(function ($rootScope, $state, authService) {
  $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
    if (toState.authenticate && !authService.authenticated()) {
      $state.transitionTo("start");
      event.preventDefault();
    }
  });
});*/