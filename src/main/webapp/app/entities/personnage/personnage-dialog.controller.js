(function() {
    'use strict';

    angular
        .module('cactusApp')
        .controller('PersonnageDialogController', PersonnageDialogController);

    PersonnageDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'Personnage', 'User'];

    function PersonnageDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, Personnage, User) {
        var vm = this;

        vm.personnage = entity;
        vm.clear = clear;
        vm.datePickerOpenStatus = {};
        vm.openCalendar = openCalendar;
        vm.save = save;
        vm.users = User.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.personnage.id !== null) {
                Personnage.update(vm.personnage, onSaveSuccess, onSaveError);
            } else {
                Personnage.save(vm.personnage, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('cactusApp:personnageUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }

        vm.datePickerOpenStatus.datecreation = false;
        vm.datePickerOpenStatus.datefin = false;

        function openCalendar (date) {
            vm.datePickerOpenStatus[date] = true;
        }
    }
})();
