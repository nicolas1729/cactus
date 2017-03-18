(function() {
    'use strict';

    angular
        .module('cactusApp')
        .controller('PersonnageDetailController', PersonnageDetailController);

    PersonnageDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Personnage', 'User'];

    function PersonnageDetailController($scope, $rootScope, $stateParams, previousState, entity, Personnage, User) {
        var vm = this;

        vm.personnage = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('cactusApp:personnageUpdate', function(event, result) {
            vm.personnage = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
