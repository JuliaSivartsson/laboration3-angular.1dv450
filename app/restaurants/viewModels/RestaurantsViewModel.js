angular.module("app").controller("RestaurantsViewModel", RestaurantsViewModel);

RestaurantsViewModel.$inject = ['RestaurantsService'];

function RestaurantsViewModel(RestaurantsService) {
    var vm = this;
}