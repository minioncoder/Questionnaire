'use strict';

angular.module('questionsApp')
  .controller('RealCtrl', function ($scope, $http, 
                                            API_URL, $location, $element, $uibModal) {
    
    $scope.preparations = [];
    
    $scope.addDomain = function(){
           var uibModalInstance = $uibModal.open({
              templateUrl: 'real/domainModal.html',
              controller: 'DomainModalCtrl',
              size: 'md',
              resolve: {
                  t: function(){
                      return $scope.preparations;
                  }
              }
          });
          uibModalInstance.result.then(function(data){
              console.log(data);
          });
    }

    $http.get(API_URL + 'real').success(function(preparations){
                $scope.preparations = preparations;
        }).error(function(err){
            // alert('warning', "Unable to get Q and A", err.message);
        });  
    });

    




