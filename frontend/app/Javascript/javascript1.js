'use strict';

angular.module('questionsApp')
  .controller('Javascript1Ctrl', function ($scope, $http, 
                                            API_URL, $location, $element, $uibModal) {
    $scope.interviews = [];
    
    $scope.addQuestion = function(questiontext, answer){
         var task = {questiontext: questiontext, answer: answer, hasAnswer: true};
        console.log("task is: " + questiontext + "  ans: " + answer);
        $scope.interviews.push(task);
        $http.post(API_URL + 'javascript1', task).then(function(res){
            console.log(res);
        });
    }
    
    $scope.hoverIn = function(){
          $scope.hoverEdit = true;
    };
            
    $scope.hoverOut = function(){
          $scope.hoverEdit = false;
    };
    
      $scope.delete = function(index){
        var ind = $scope.interviews.splice(index, 1);
        var url = API_URL + 'javascript1/' + ind[0]._id;
        alert("Do you want to delete for sure?");
        $http.delete(url).then(function(res){
            console.log("Deleted Task", res);
        });
      }
      
      $scope.edit = function(t){
           var uibModalInstance = $uibModal.open({
              templateUrl: 'Javascript/editModal.html',
              controller: 'editQuestionsCtrl',
              size: 'md',
              resolve: {
                  t: function(){
                      return t;
                  }
              }
          });
          uibModalInstance.result.then(function(data){
              console.log(data);
          });
      }
   
      $http.get(API_URL + 'javascript1').success(function(interviews){
                $scope.interviews = interviews;
        }).error(function(err){
            // alert('warning', "Unable to get Q and A", err.message);
        });  
      });

    




