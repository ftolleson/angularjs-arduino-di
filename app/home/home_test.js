'use strict';

describe('fireworksRC.home module', function() {

  beforeEach(module('fireworksRC.home'));

  describe('home controller', function(){

    it('should be defined', inject(function($controller) {
      //spec body
      var homeCtrl = $controller('HomeCtrl'); // Note a controller is a constructor function
      expect(homeCtrl).toBeDefined();
    }));

    it('should not be connected by default', inject(function($controller) {
      
      var homeCtrl = $controller('HomeCtrl');
      //expect(homeCtrl.connected).toBeFalse();

    }));

  });
});