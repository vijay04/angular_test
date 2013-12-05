var angularApp = angular.module('angularApp', []);

angularApp.controller('angularAppCtrl', ['$scope', '$http', '$location', function($scope,  $http, $location) {
  var base_url = $location.$$absUrl;
  $scope.loadItems = function() {
    $http.get(base_url + 'json/items.json').success(function (response) {
      $scope.items = response;
    });
  };
}]);
