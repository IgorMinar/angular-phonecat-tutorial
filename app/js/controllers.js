'use strict';
/* App Controllers */

var PhoneListCtrl = function PhoneListCtrl($scope, $http) {
  $http.get('phones/phones.json').success(function(data) {
    $scope.phones = data;
  });

  $scope.orderProp = 'age';
}
//PhoneListCtrl.$inject = ['$scope', '$scope'];


function PhoneDetailCtrl($scope, $http, $routeParams) {
  $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
    $scope.phone = data;
  });
}

//PhoneDetailCtrl.$inject = ['$scope, '$http'];
