'use strict';

angular.module('questionsApp')
    .factory('JavascriptService', function($http, API_URL){
   
    var JavascriptService = {
        edit: edit,
        edithtml5: edithtml5
    };
    
    return JavascriptService;
    
    function edit(payload){
       return $http.put(API_URL + 'javascript1', payload).success(function(result){
           console.log(result);
       });
    }
    
    function edithtml5(payload){
        return $http.put(API_URL + 'html5', payload).success(function(result){
            console.log(result);
        });
    }
    
});




