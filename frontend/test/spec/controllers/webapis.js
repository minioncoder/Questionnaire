'use strict';

describe('Controller: WebapisCtrl', function () {

  // load the controller's module
  beforeEach(module('questionsApp'));

  var WebapisCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WebapisCtrl = $controller('WebapisCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(WebapisCtrl.awesomeThings.length).toBe(3);
  });
});
