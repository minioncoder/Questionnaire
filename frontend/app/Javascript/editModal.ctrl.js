'use strict';

angular.module('questionsApp')
    .controller('editQuestionsCtrl', function($scope, $uibModalInstance, qtext, atext, qId, JavascriptService){
    
    $scope.q = qtext;
    $scope.a = atext;
    
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.ok = function () {
        $uibModalInstance.close(true);
    };

    $scope.save = function(){
        var payload = {
            qid: qId,
            //questiontext: qtext,
            //answer: atext
        }
        
        JavascriptService.edit(payload)
            .then(function(result){
            console.log(result);
            $scope.ok();      
        });
    }
});