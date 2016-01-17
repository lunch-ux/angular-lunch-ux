/**
 * @ngdoc service
 * @name lunchUxApp.component.translations.factory:translationCustomLoaderFactory
 * @description
 * # translationsCustomLoaderFactory
 * Translations Custom Loader service of the lunchUxApp
 */
(function() {
    'use strict';
    angular.module('lunchUxApp.component.translations')
        .factory('translationsCustomLoaderFactory', translationsCustomLoaderFactory);

    /* @ngInject */
    function translationsCustomLoaderFactory($http, $q, translations) {
        // return loaderFn
        return function(options) {
            var deferred = $q.defer();
            deferred.resolve(translations[options.key] || {});
            return deferred.promise;
        };
    }


    translationsCustomLoaderFactory.$inject = ['$http', '$q', 'translations'];
})();

