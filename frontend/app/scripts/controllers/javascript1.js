'use strict';

angular.module('questionsApp')
  .controller('Javascript1Ctrl', function ($scope, $http, 
                                            API_URL, $location) {
    $scope.interviews = [];
    
    $scope.add = function(){
        var task = {questiontext: $scope.question, Answer: $scope.answer, hasAnswer: true};
        $scope.interviews.push(task);
        $scope.task = null;
        console.log("task is: "+$scope.question+"ans: "+$scope.answer);
        $http.post(API_URL + 'javascript1', task).then(function(res){
            console.log(res);
        });
    }
    
    $scope.hoverIn = function(){
        this.hoverEdit = true;
    }  
    $scope.hoverOut = function(){
        this.hoverEdit = false;
    }
    $scope.edit = function(){
         
    }
    $scope.delete = function(){
        
    }
    
//    $scope.removeItem = function(index){
//        var ind = $scope.tasks.splice(index, 1);
//        var url = API_URL + 'jobs/'+ind[0]._id;
//        $http.delete(url).then(function(res){
//            console.log("Deleted task", res);
//        });
//    }
//    
//    $scope.done = function(index){
//        var t = $scope.tasks.indexOf(index);
//        var t1 = $scope.tasks[t];
//        t1.Completed = true;
//        var url = API_URL + 'jobs/' + t1._id;
//        $http.put(url, t1)
//        .success(function(data, status, headers){
//            t1.Completed = true;
//            $scope.ServerResponse = data;
//            console.log(data);
//        });
//    }
   
    $http.get(API_URL + 'javascript1').success(function(interviews){
            $scope.interviews = interviews;
    }).error(function(err){
        // alert('warning', "Unable to get Q and A", err.message);
    });  
    

    $scope.courses = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
