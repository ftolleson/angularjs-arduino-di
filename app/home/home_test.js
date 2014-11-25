'use strict';

describe('fireworksRC.home module', function() {

  var SIMULATOR_URL = 'http://simulator.local';

  var VALID_HTTP_GET = {
    "id": "001",
    "name": "fireworks_system",
    "connected": true
  };

  var VALID_FIRE_RESPONSE = {
    "return_value" : 1
  };

  beforeEach(module('fireworksRC.home',function($provide) {

    $provide.constant('FireworksBE_URL', SIMULATOR_URL);

  }));

  describe('An application controller', function(){

    var ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $controller) {

      $httpBackend = _$httpBackend_;

      $httpBackend.whenGET(SIMULATOR_URL).respond(VALID_HTTP_GET);
      $httpBackend.whenGET(SIMULATOR_URL + '/fire?params=0').respond(VALID_FIRE_RESPONSE);

      ctrl = $controller('HomeCtrl');

    }));

    it('should detect if the remote system is unreachable', function() {

      $httpBackend.expectGET(SIMULATOR_URL).respond(0);
      $httpBackend.flush();
      
      expect(ctrl.connected).toBe(false);

      
    });

    it('should detect if the remote system is available', function() {
      
      expect(false).toBe(true);

      // expectGET

      // flush

      // expect connected true

    });

    it('should not fire if already launched', function () {
      
      expect(false).toBe(true);

      // flush systemUpdate

      // expect isLaunched false

      // expect GET /fire?params=0

      // ctrl.fire()

      // flush

      // expect isLaunched() true

      // expect toThrow 'The system is already launched, you cannot fire it'

    });

    it('should fire if not already launched', function() {

      expect(false).toBe(true);

      // flush systems update

      // expect isLaunched false

      // ctrl.fire 

      // expectGET /fire?params=0

      // flush

      // expect isLaunched() true



    });




  });
});