'use strict';


// Declare app level module which depends on filters, and services
angular.module('phonecatApp', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/phones',
      {template: 'partials/phone-list.html',   controller: PhoneListCtrl});
  $routeProvider.when('/phones/:phoneId',
      {template: 'partials/phone-detail.html', controller: PhoneDetailCtrl});
  $routeProvider.otherwise({redirectTo: '/phones'});
}]);
