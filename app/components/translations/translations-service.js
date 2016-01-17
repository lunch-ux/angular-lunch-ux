/**
 * @ngdoc function
 * @name lunchUxApp.factory:translationService
 * @description
 * # translationService
 * Translation service of the lunchUxApp
 */
(function() {
    'use strict';
    angular.module('lunchUxApp.component.translations')
        .service('translationService', translationService);

    /* @ngInject */
    function translationService(_, $translate, translations) {
        var service = {
            addTranslations: addTranslations
        };

        return service;

        function addTranslations(value, key) {
            //translations.STEP_1 = 'Step 1';
            translations[key] = _.merge(translations[key], value);
            $translate.refresh(key);
        }
    }

    translationService.$inject = ['_', '$translate', 'translations'];
})();

