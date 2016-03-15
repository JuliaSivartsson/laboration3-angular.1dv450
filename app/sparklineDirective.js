
/*app.directive('ngSparkline', function() {
  var url = "https://api.met.no/weatherapi/locationforecast/1.9/?lat=60.10;lon=9.58;msl=70";
  return {
    restrict: 'A',
    require: '^ngCity',
    scope: {
      ngCity: '@'
    },
    template: '<div class="sparkline"><h4>Weather for </h4><div class="graph"></div></div>',
    controller: ['$scope', '$http', function($scope, $http) {
      $scope.getTemp = function(city) {
        $http({
          method: 'JSONP',
          url: url
        }).success(function(data) {
          var weather = [];
          angular.forEach(data.list, function(value){
            weather.push(value);
          });
          $scope.weather = weather;
        });
      }
    }],
    link: function(scope, iElement, iAttrs, ctrl) {
      scope.getTemp(iAttrs.ngCity);
      scope.$watch('weather', function(newVal) {
        // the `$watch` function will fire even if the
        // weather property is undefined, so we'll
        // check for it
        if (newVal) {
          var highs = [],
              width   = 200,
              height  = 80;
 
          angular.forEach(scope.weather, function(value){
            highs.push(value.temp.max);
          });
          // chart
        }
      });
    }
  }
});

app.directive('ngCity', function() {
  return {
    controller: function($scope) {}
  }
});*/