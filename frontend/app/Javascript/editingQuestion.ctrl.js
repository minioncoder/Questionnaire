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
                
    $scope.save = function(){
        alert($scope.index);
//        var t1 = $scope.interviews.indexOf($scope.index);
//        var t2 = $scope.interviews[$scope.index];
//        console.log(t2);
//        $scope.value = $scope.view.editableValue;
//        var url = API_URL + 'javascript1/' + t2._id;
//        $http.put(url, $scope.value)
//            .success(function(data, status){
//            console.log(data);
//        })
        $scope.disableEditor();
    };
    
    $scope.delete = function(index){
        alert("hello "+index);
//        $scope.view.deleteValue = true;
//        var ind = $scope.interviews.splice(index, 1);
//        var url = API_URL + 'javascript1/' + ind[0]._id;
//        alert("Do you want to delete for sure?");
//        $http.delete(url).then(function(res){
//            console.log("Deleted Task", res);
//        });
    }
     
    $scope.interviews = [];
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