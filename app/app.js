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
    angular.module('lunchUxApp', [
        'ngAnimate',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngSanitize',
        'ngTouch',
        'ui.router',

        'lunchUxApp.poc',
        'lunchUxApp.component.translations'
  ]);
})();
