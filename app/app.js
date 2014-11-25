'use strict';

// Declare app level module which depends on views, and components
angular.module('fireworksRC', [
  'ngRoute',
  'fireworksRC.home'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);



angular.module('fireworksRC_DEV', [
  'fireworksRC',
  'ngMockE2E'
]).
run(['$httpBackend', function($httpBackend) {

  $httpBackend.whenGET('http://192.168.1.100').respond({
    "id": "001",
    "name": "fireworks_system",
    "connected": true
  });

  $httpBackend.whenGET('http://192.168.1.100/fire?params=0').respond({
    "return_value" : 1});


  $httpBackend.whenGET('home/home.html').passThrough();
}]);
