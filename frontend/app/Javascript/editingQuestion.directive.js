'use strict';

angular.module('questionsApp')  
    .directive('clickToEdit', function(){
        var editorTemplate = 'Javascript/editingQuestion.html';
        return {
            restrict: 'A',
            replace: true,
            templateUrl: editorTemplate,
            scope: {
                value: "=clickToEdit",
                index: '@'
            },
            controller: "editingCtrl"
        };
})