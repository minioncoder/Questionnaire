'use strict';

describe('Controller: AlgosCtrl', function () {

  // load the controller's module
  beforeEach(module('questionsApp'));

  var AlgosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AlgosCtrl = $controller('AlgosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AlgosCtrl.awesomeThings.length).toBe(3);
  });
});
