'use strict';

angular.module('questionsApp')  
    .directive('clickToEdit', function(){
        var editorTemplate = 'Javascript/editingQuestion.html';
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: editorTemplate,
            scope: {
//                value: "=clickToEdit",
//                index: '@',
                datasource: '=',
                add: '&'
            },
            controller: "editingCtrl"
        };
})