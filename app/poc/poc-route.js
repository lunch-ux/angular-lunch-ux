(function() {
    'use strict';
    angular.module('lunchUxApp.poc')
        .config(routerConfiguration);
    

    /* @ngInject */
    function routerConfiguration($stateProvider, $urlRouterProvider) {
        $stateProvider.state('poc', {
            url : '/poc/',
            templateUrl : "poc/poc.html",
            controller : 'PocCtrl',
            controllerAs : 'vm'
        });
    }

    
    routerConfiguration.$inject = ['$stateProvider', '$urlRouterProvider'];
})();