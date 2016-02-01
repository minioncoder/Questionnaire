'use strict';

describe('Controller: Angularjs1Ctrl', function () {

  // load the controller's module
  beforeEach(module('questionsApp'));

  var Angularjs1Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Angularjs1Ctrl = $controller('Angularjs1Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Angularjs1Ctrl.awesomeThings.length).toBe(3);
  });
});
