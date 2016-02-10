'use strict';

angular.module('questionsApp')
  .controller('editingCtrl', function ($scope, $element) {
    $scope.view = {
            editableValue: $scope.value,
            editorEnabled: false,
            deleteValue: false,
            hoverEdit: false
    };
    
    $scope.hoverIn = function(){
          $scope.view.hoverEdit = true;
    };
            
    $scope.hoverOut = function(){
          $scope.view.hoverEdit = false;
    };
                
    $scope.enableEditor = function(){
            $scope.view.editorEnabled = true;
            $scope.view.editableValue = $scope.value;
//            setTimeout(function(){
//                $element.find('input')[0].focus();
//            });
    };
    
    $scope.disableEditor = function(){
        $scope.view.editorEnabled = false;
    };
     
    $scope.interviews = [];
    
    $scope.takeQuiz = function(){
        confirm("Quiz section will be added pretty soon");
    }
    
    $scope.addQuestion = function(){
        
        $scope.add({questiontext: $scope.question, answer: $scope.answer});
        
        $scope.interviews.push({
            questiontext: $scope.question,
            answer: $scope.answer,
        });
        $scope.question = null;
        $scope.answer = null;
    }
    
});