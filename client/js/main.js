(function() {
  angular.module('main', [
    'ui.router'
  ])
// sets up our controllers
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'pages/home.html',
        controller: "FactController",
        controllerAs: "factCtrl"
      })
      .state('angular', {
        url: '/angular',
        templateUrl: 'pages/angulardocs.html',
        controller: 'DocsController',
        controllerAs: 'docsCtrl'
      })
      .state('sass', {
        url: '/sass',
        templateUrl: 'pages/sassdocs.html',
        
      })
      
      // enables us to remove the # in the url
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode({
      enabled: true
    });
  });
})();
