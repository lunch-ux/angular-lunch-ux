/**
 * @ngdoc overview
 * @name lunchUxApp
 * @description
 * # lunchUxApp
 *
 * Main module of the application.
 */
(function() {
    'use strict';
    angular.module('lunchUxApp.poc', [
        'ngMaterial',
        'pascalprecht.translate',

        'lunchUxApp.component.translations'
    ]);
})();
