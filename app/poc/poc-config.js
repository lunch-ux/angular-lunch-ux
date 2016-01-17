(function() {
    'use strict';
    angular.module('lunchUxApp.poc')
        .run(initializeTranslations);


    /* @ngInject */
    function initializeTranslations(pocTranslationsService) {
        pocTranslationsService.init();
    }


    initializeTranslations.$inject = ['pocTranslationsService'];
})();