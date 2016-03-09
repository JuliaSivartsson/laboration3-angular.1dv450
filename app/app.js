var app = angular.module("app", ['ngRoute', 'ngMap'])
  .config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
      $routeProvider.
        when('/', { templateUrl: 'app/home/views/indexView.html' }).
        when('/restaurants', { templateUrl: 'app/restaurants/views/restaurantsView.html', controller: 'restaurantsViewModel', controllerAs: 'restaurantsCtrl' }).
        when('/restaurant/:restaurantId', { templateUrl: 'app/restaurants/views/restaurantDetailsView.html', controller: 'restaurantViewModel', controllerAs: 'restaurantCtrl' }).
        when('/restaurants/add', { templateUrl: 'app/restaurants/views/addRestaurantView.html', controller: 'modifyRestaurantViewModel', controllerAs: 'restaurantCtrl' }).
        
        when('/tags', { templateUrl: 'app/tags/views/tagsView.html', controller: 'tagsViewModel', controllerAs: 'tags' }).
        when('/tag/:tagId', { templateUrl: 'app/tags/views/tagDetailsView.html', controller: 'tagViewModel', controllerAs: 'tags' }).
        
        when('/positions', { templateUrl: 'app/positions/views/positionsView.html', controller: 'positionsViewModel', controllerAs: 'positions' }).
        when('/position/:positionId', { templateUrl: 'app/positions/views/positionDetailsView.html', controller: 'positionViewModel', controllerAs: 'positions' }).
        
        when('/login', { templateUrl: 'app/authentication/views/loginView.html', controller: 'loginViewModel', controllerAs: 'login' }).
        when('/logout', { template: " ", controller: 'logoutViewModel', controllerAs: 'logout' }).
        otherwise({ redirectTo: '/' });
      $locationProvider.html5Mode(true); // This removes the hash-bang and use the Session history management >= IE10

    }]);
