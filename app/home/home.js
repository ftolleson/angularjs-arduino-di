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

  var system = {},
      that = this;

  that.connected = false;
  that.launched = false;

  // private helper functions

  var updateSystemData = function() {

    $http.get(FireworksBE_URL).
      success(function(data, status, headers, config) {

        console.log('ok');

        switch(status) {
          case 200:
            that.connected = true;
            system = data;
            break;
          default:
            handleSystemNotAvailable();
        }

      }).
      error(function(data, status, headers, config) {
        handleSystemNotAvailable();
      });    

  };

  var handleSystemNotAvailable = function() {
    system = {};
    that.connected = false;
  }

  ////////////////////////////////

  updateSystemData();


  that.isLaunched = function() {
    return (that.launched === true);    
  };

  that.fire = function() {

    if(that.launched === true) {
      throw "The system is already launched, you cannot fire it";
    } else {

      $http.get(FireworksBE_URL + '/fire?params=0', { timeout: 2000}).
        success( function(data, status, headers, config) {

          if (status === 200 && data.return_value === 1) {
            that.launched = true;
          }

        }).
        error(function(data, status, headers, config) {
            that.launched = false;
        });

    }
  };



}]);
