'use strict';

angular.module('questionsApp')
    .factory('JavascriptService', function($http, API_URL){
   
    var JavascriptService = {
        edit: edit
    };
    
    return JavascriptService;
    
    function edit(payload){
       return $http.put(API_URL + 'javascript1', payload).success(function(result){
           console.log(result);
       })
    }
    
});




