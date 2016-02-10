'use strict';

angular.module('questionsApp')
        .controller('PrepareCtrl', function($scope, $stateParams, $http){
    
     $scope.contacts = {
            id: 1,
            name: 'Bhavya'
        }
    
    $scope.questions = function(){
       alert("Hello World!!");
    }
   
    $scope.id = $stateParams.id;
    
    $http.get()
});