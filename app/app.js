var app = angular.module("app", ['ngRoute'])
  .config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
      $routeProvider.
        when('/', { templateUrl: 'app/home/views/indexView.html' }).
        when('/restaurants', { templateUrl: 'app/restaurants/views/restaurantsView.html', controller: 'restaurantsViewModel', controllerAs: 'restaurantsCtrl' }).
        when('/restaurant/:restaurantId', { templateUrl: 'app/restaurants/views/restaurantDetailsView.html', controller: 'restaurantViewModel', controllerAs: 'restaurantCtrl' }).
        when('/tags', { templateUrl: 'app/tags/views/tagsView.html', controller: 'tagsViewModel', controllerAs: 'tags' }).
        when('/tag/:id', { templateUrl: 'views/player-detail.html', controller: 'tagViewModel', controllerAs: 'tags' }).
        
        when('/login', { templateUrl: 'app/authentication/views/loginView.html', controller: 'loginViewModel', controllerAs: 'login' }).
        otherwise({ redirectTo: '/' });
      $locationProvider.html5Mode(true); // This removes the hash-bang and use the Session history management >= IE10

    }]);
