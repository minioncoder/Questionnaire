'use strict';

describe('Controller: Javascript1Ctrl', function () {

  // load the controller's module
  beforeEach(module('questionsApp'));

  var Javascript1Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Javascript1Ctrl = $controller('Javascript1Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Javascript1Ctrl.awesomeThings.length).toBe(3);
  });
});
