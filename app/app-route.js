(function() {
    'use strict';
    angular.module('lunchUxApp')
        .config(routerConfiguration);
    

    /* @ngInject */
    function routerConfiguration($stateProvider, $urlRouterProvider) {
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/poc/");
    }

    
    routerConfiguration.$inject = ['$stateProvider', '$urlRouterProvider'];
})();