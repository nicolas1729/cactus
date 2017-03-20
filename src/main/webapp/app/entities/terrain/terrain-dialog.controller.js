(function() {
    'use strict';

    angular
        .module('cactusApp')
        .controller('TerrainDialogController', TerrainDialogController);

    TerrainDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'Terrain'];

    function TerrainDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, Terrain) {
        var vm = this;

        vm.terrain = entity;
        vm.clear = clear;
        vm.save = save;

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.terrain.id !== null) {
                Terrain.update(vm.terrain, onSaveSuccess, onSaveError);
            } else {
                Terrain.save(vm.terrain, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('cactusApp:terrainUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
