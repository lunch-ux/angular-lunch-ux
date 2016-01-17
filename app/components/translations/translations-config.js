(function() {
    'use strict';
    angular.module('lunchUxApp.component.translations')
        .value('translations', {
            en_US: {
                YES: 'Yes',
                NO: 'No'
            }
        })
        .config(translationConfig);


    /* @ngInject */
    function translationConfig($translateProvider) {
        $translateProvider.useLoader('translationsCustomLoaderFactory', {});
        $translateProvider.use('en_US');
    }


    translationConfig.$inject = ['$translateProvider'];
})();