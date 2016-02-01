'use strict';

describe('Controller: EfCtrl', function () {

  // load the controller's module
  beforeEach(module('questionsApp'));

  var EfCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EfCtrl = $controller('EfCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EfCtrl.awesomeThings.length).toBe(3);
  });
});
