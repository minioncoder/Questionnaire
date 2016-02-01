'use strict';

describe('Controller: Css1Ctrl', function () {

  // load the controller's module
  beforeEach(module('questionsApp'));

  var Css1Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Css1Ctrl = $controller('Css1Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Css1Ctrl.awesomeThings.length).toBe(3);
  });
});
