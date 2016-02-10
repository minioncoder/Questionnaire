'use strict';

angular.module('questionsApp')
    .controller('DomainModalCtrl', function($scope, $uibModalInstance, DomainsService){
    
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.ok = function (payload) {
        $uibModalInstance.close(payload);
    };

    $scope.save = function(){
        var payload = {
            qDomain: $scope.domainName,
            questiontext: $scope.q,
            answer: $scope.a
        }
        
        DomainsService.addnew(payload)
            .then(function(result){
            console.log(result);
            $scope.ok(payload);      
        });
    }
});