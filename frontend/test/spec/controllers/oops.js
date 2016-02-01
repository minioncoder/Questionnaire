'use strict';

describe('Controller: OopsCtrl', function () {

  // load the controller's module
  beforeEach(module('questionsApp'));

  var OopsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OopsCtrl = $controller('OopsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OopsCtrl.awesomeThings.length).toBe(3);
  });
});
