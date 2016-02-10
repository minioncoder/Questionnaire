'use strict';

angular.module('questionsApp')
    .factory('DomainsService', function($http, API_URL){
   
    var DomainsService = {
        addnew: addnew
    };
    
    return DomainsService;
    
    function addnew(payload){
       return $http.post(API_URL + 'real', payload).success(function(result){
           console.log(result);
       });
    }
    
});




