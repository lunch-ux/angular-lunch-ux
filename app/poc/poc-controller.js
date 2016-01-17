/**
 * @ngdoc function
 * @name lunchUxApp.controller:MainCtrl
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

        function addAnotherChild() {
            vm.children.push({});
        }

        function addAnotherMember() {
            vm.members.push({});
        }
    }

    PocCtrl.$inject = [];
})();

