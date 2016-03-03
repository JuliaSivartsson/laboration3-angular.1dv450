angular.module("app", ['ngRoute'])
  .config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
      $routeProvider.
        when('/', { templateUrl: 'app/home/views/indexView.html' }).
        when('/restaurants', { templateUrl: 'app/restaurants/views/restaurantsView.html', controller: 'restaurantsViewModel', controllerAs: 'restaurants' }).
        when('/restaurant/:id', { templateUrl: 'views/player-detail.html', controller: 'restaurantViewModel', controllerAs: 'restaurants' }).
        when('/tags', { templateUrl: 'views/player-list.html', controller: 'tagsViewModel', controllerAs: 'tags' }).
        when('/tag/:id', { templateUrl: 'views/player-detail.html', controller: 'tagViewModel', controllerAs: 'tags' }).
        otherwise({ redirectTo: '/' });
      $locationProvider.html5Mode(true); // This removes the hash-bang and use the Session history management >= IE10

    }]);