'use strict';

describe('Controller: Html5Ctrl', function () {

  // load the controller's module
  beforeEach(module('questionsApp'));

  var Html5Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Html5Ctrl = $controller('Html5Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Html5Ctrl.awesomeThings.length).toBe(3);
  });
});
