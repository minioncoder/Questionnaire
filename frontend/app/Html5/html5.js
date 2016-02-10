'use strict';

angular.module('questionsApp')
  .controller('Html5Ctrl', function ($scope, $http, 
                                            API_URL, $location, $element, $uibModal) {
    $scope.htmlinterviews = [];
    
    $scope.addQuestion = function(questiontext, answer){
         var task = {questiontext: questiontext, answer: answer, hasAnswer: true};
        console.log("task is: " + questiontext + "  ans: " + answer);
        $scope.htmlinterviews.push(task);
        $http.post(API_URL + 'html5', task).then(function(res){
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
        var ind = $scope.htmlinterviews.splice(index, 1);
        var url = API_URL + 'html5/' + ind[0]._id;
        alert("Do you want to delete for sure?");
        $http.delete(url).then(function(res){
            console.log("Deleted Task", res);
        });
      }
      
      $scope.edit = function(t){
           var uibModalInstance = $uibModal.open({
              templateUrl: 'html5/editModal.html',
              controller: 'editModalCtrl',
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
   
      $http.get(API_URL + 'html5').success(function(htmlinterviews){
                $scope.htmlinterviews = htmlinterviews;
        }).error(function(err){
            // alert('warning', "Unable to get Q and A", err.message);
        });  
      });