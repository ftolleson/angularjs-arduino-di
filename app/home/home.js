'use strict';

angular.module('fireworksRC.home', ['ngRoute'])

.constant('FireworksBE_URL', 'http://192.168.1.100')

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controllerAs : 'home',
    controller: 'HomeCtrl'
  });
}])
.controller('HomeCtrl', ['FireworksBE_URL','$http', function(FireworksBE_URL, $http) {

  var that = this;

  that.connected = false;

  var updateSystemData = function () {

    $http.get(FireworksBE_URL).
      success(function(data, status, headers, config) {
        
      }).
      error(function(data, status, headers, config) {
        that.connected = false;
      });


  }; 

  updateSystemData();



}]);
