var angularApp = angular.module('angularApp', []);

angularApp.factory('shareditems', ['$http', '$rootScope', '$location', function($http, $rootScope, $location) {
  var items = [];
	
  return {
    getItems: function() {
    	var base_url = $location.$$absUrl;
      return $http.get(base_url + 'json/items.json').then(function (response) {
        items = response.data;
        $rootScope.$broadcast('handleItemsBroadcast', items);
        return items;
      });
    },
    
  };
}]);

angularApp.controller('angularAppCtrl', ['$scope','shareditems', function($scope, shareditems) {
  
  $scope.loadItems = function() {
    shareditems.getItems().then(function(items) {
    	$scope.items = items;
  	});
  };
}]);
