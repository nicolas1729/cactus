(function() {
    'use strict';

    angular
        .module('cactusApp')
        .controller('TerrainDetailController', TerrainDetailController);

    TerrainDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Terrain'];

    function TerrainDetailController($scope, $rootScope, $stateParams, previousState, entity, Terrain) {
        var vm = this;

        vm.terrain = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('cactusApp:terrainUpdate', function(event, result) {
            vm.terrain = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
