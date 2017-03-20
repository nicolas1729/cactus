(function() {
    'use strict';

    angular
        .module('cactusApp')
        .controller('LieuDialogController', LieuDialogController);

    LieuDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'Lieu', 'Terrain'];

    function LieuDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, Lieu, Terrain) {
        var vm = this;

        vm.lieu = entity;
        vm.clear = clear;
        vm.save = save;
        vm.terrains = Terrain.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.lieu.id !== null) {
                Lieu.update(vm.lieu, onSaveSuccess, onSaveError);
            } else {
                Lieu.save(vm.lieu, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('cactusApp:lieuUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
