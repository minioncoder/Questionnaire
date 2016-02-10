angular
  .module('questionsApp').config(function($stateProvider, $urlRouterProvider){
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
    .state('main', {
        url: '/',
        templateUrl: 'dashboard/main.html'
    })
    .state('domainNames', {
        url: '/domainNames',
        templateUrl: 'Domains/domainnames.html'
    })
     .state('javascript1', {
        url: '/javascript1',
        templateUrl: 'Javascript/javascript1.html',
        controller: 'Javascript1Ctrl'
    })
     .state('html5', {
        url: '/html5',
        templateUrl: 'Html5/html5.html',
        controller: 'Html5Ctrl'
    })
     .state('real', {
        url: '/real',
        templateUrl: '/real/real.html',
        controller: 'RealCtrl'
    })
     .state('prepare', {
        url: '/prepare/:id      ',
        templateUrl: '/real/prepare.html',
        controller: 'PrepareCtrl'
    })
})
.constant('API_URL', 'http://localhost:3000/');
