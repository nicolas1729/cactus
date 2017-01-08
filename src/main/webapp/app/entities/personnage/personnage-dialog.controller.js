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

        $scope.nbpoint = function() {
            var compfabriquer = vm.personnage.compfabriquer;
            compfabriquer = compfabriquer===undefined?0:compfabriquer;
            
            var compconstruire = vm.personnage.compconstruire;
            compconstruire = compconstruire===undefined?0:compconstruire;
            
            var compeau = vm.personnage.compeau;
            compeau = compeau===undefined?0:compeau;
            
            var compnour = vm.personnage.compnour;
            compnour = compnour===undefined?0:compnour;
            
            var compcombat = vm.personnage.compcombat;
            compcombat = compcombat===undefined?0:compcombat;
            
            var compsoigner = vm.personnage.compsoigner;
            compsoigner = compsoigner===undefined?0:compsoigner;
            
            var nbPointUtilise = compfabriquer + compcombat + compconstruire + compeau + compnour + compsoigner;
            var resultat = 12 - nbPointUtilise;
            if(resultat!==0)$scope.editForm.$invalid=true;
            else $scope.editForm.$invalid=false;
            return resultat;
        };
        
        $scope.couleurnbpoint = function() {
            return $scope.nbpoint()>=0?"green":"red";
        };
    
        $scope.nbpointCorrect = function() {
            return $scope.nbpoint()===0?true:false;
        };
        
        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            alert("save");
            vm.isSaving = true;
            if (vm.personnage.id !== null) {
                Personnage.update(vm.personnage, onSaveSuccess, onSaveError);
            } else {
                Personnage.save(vm.personnage, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            alert("saveSucess");
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
