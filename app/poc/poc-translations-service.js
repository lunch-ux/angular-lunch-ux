/**
 * @ngdoc function
 * @name lunchUxApp.factory:PocTranslationService
 * @description
 * # PocTranslationService
 * POC translation service of the lunchUxApp
 */
(function() {
    'use strict';
    angular.module('lunchUxApp.poc')
        .service('pocTranslationsService', pocTranslationsService);

    /* @ngInject */
    function pocTranslationsService($translate, translationService) {
        var service = {
            translations: {
                en_US: {
                    APP_TITLE: '2015-2016 Prototype Application for Free and Reduced Price School Meals',
                    ONE_APP_PER_HOUSE: 'Complete one application per household.',
                    STEP_1: 'Step 1',
                    STEP_1_HELP: 'List ALL Household Members who are infants, children, and students up to and including grade 12',
                    FIRST_NAME: 'First Name',
                    MIDDLE_INITIAL_ABBREV: 'M.I.',
                    LAST_NAME: 'Last Name',
                    STUDENT: 'Student',
                    FOSTER_CHILD: 'Foster Child',
                    HOMELESS_MIGRANT_RUNAWAY: 'Homeless Migrant Runaway',
                    ADD_ANOTHER_CHILD: 'Add Another Child',
                    STEP_2: 'Step 2',
                    STEP_2_HELP: 'Do any Household Members (including you) currently participate in one or more of the following assistance programs: SNAP, TANF, or FDPIR?',
                    STEP_3: 'Step 3',
                    STEP_3_HELP: 'Report Income for ALL Household Members',
                    ADD_ANOTHER_MEMBER: 'Add Another Member'
                }
            },
            init: init
        };

        return service;

        function init() {
            _.forEach(service.translations, function(translations, key) {
                translationService.addTranslations(translations, key);
            });
        }
    }

    pocTranslationsService.$inject = ['$translate', 'translationService'];
})();

