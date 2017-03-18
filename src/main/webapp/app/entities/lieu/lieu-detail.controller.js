(function() {
    'use strict';

    angular
        .module('cactusApp')
        .controller('LieuDetailController', LieuDetailController);

    LieuDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Lieu', 'Terrain'];

    function LieuDetailController($scope, $rootScope, $stateParams, previousState, entity, Lieu, Terrain) {
        var vm = this;

        vm.lieu = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('cactusApp:lieuUpdate', function(event, result) {
            vm.lieu = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
