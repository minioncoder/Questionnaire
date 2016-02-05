'use strict';

angular.module('questionsApp')
    .controller('editQuestionsCtrl', function($scope, $uibModalInstance, t , JavascriptService){
    
    $scope.q = t.questiontext;
    $scope.a = t.answer;
    
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.ok = function (payload) {
        $uibModalInstance.close(payload);
    };

    $scope.save = function(){
        var payload = {
            qid: t._id,
            questiontext: $scope.q,
            answer: $scope.a
        }
        
        JavascriptService.edit(payload)
            .then(function(result){
            console.log(result);
            $scope.ok(payload);      
        });
    }
});