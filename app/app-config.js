(function() {
    'use strict';
    angular.module('lunchUxApp')
        .config(appConfig)
        .constant('_', window._)
        .run(initLodash);


    /* @ngInject */
    function appConfig($locationProvider) {
        $locationProvider.hashPrefix('!');
    }

    /* @ngInject */
    function initLodash($rootScope) {
        $rootScope._ = window._;
    }


    appConfig.$inject = ['$locationProvider'];
    initLodash.$inject = ['$rootScope'];
})();