/**
 * @ngdoc controller
 * @name lunchUxApp.poc.controller:PocCtrl
 * @description
 * # PocCtrl
 * Poc controller of the lunchUxApp
 */
(function() {
    'use strict';
    angular.module('lunchUxApp.poc')
        .controller('PocCtrl', PocCtrl);

    /* @ngInject */
    function PocCtrl() {
        var vm = this;

        // Scope Variables
        vm.children = [{}];
        vm.member = [{}];

        // Scope Functions
        vm.addAnotherChild = addAnotherChild;
        vm.addAnotherMember = addAnotherMember;

        /**
         * @ngdoc method
         * @name addAnotherChild
         * @methodOf lunchUxApp.poc.controller:PocCtrl
         * @description
         * Adds another child to the view
         */
        function addAnotherChild() {
            vm.children.push({});
        }

        /**
         * @ngdoc method
         * @name addAnotherMember
         * @methodOf lunchUxApp.poc.controller:PocCtrl
         * @description
         * Adds another member to the view
         */
        function addAnotherMember() {
            vm.members.push({});
        }
    }

    PocCtrl.$inject = [];
})();

