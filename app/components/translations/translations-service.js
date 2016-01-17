/**
 * @ngdoc service
 * @name lunchUxApp.component.translations.factory:translationService
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

        /**
         * @ngdoc method
         * @name addTranslations
         * @methodOf lunchUxApp.component.translations.factory:translationService
         * @description
         * Adds translations to the app
         *
         * @param {string} value The translations to add
         * @param {string} key The key of the translations to add (e.g. en_US)
         */
        function addTranslations(value, key) {
            //translations.STEP_1 = 'Step 1';
            translations[key] = _.merge(translations[key], value);
            $translate.refresh(key);
        }
    }

    translationService.$inject = ['_', '$translate', 'translations'];
})();

