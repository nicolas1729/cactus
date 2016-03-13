'use strict';

angular.module('cactusApp').controller('PersonnageDialogController',
    ['$scope', '$stateParams', '$uibModalInstance', 'entity', 'Personnage',
        function($scope, $stateParams, $uibModalInstance, entity, Personnage) {

        $scope.personnage = entity;
        $scope.load = function(id) {
            Personnage.get({id : id}, function(result) {
                $scope.personnage = result;
            });
        };

        var onSaveSuccess = function (result) {
            $scope.$emit('cactusApp:personnageUpdate', result);
            $uibModalInstance.close(result);
            $scope.isSaving = false;
        };

        var onSaveError = function (result) {
            $scope.isSaving = false;
        };

        $scope.save = function () {
            $scope.isSaving = true;
            if ($scope.personnage.id != null) {
                Personnage.update($scope.personnage, onSaveSuccess, onSaveError);
            } else {
                Personnage.save($scope.personnage, onSaveSuccess, onSaveError);
            }
        };

        $scope.clear = function() {
            $uibModalInstance.dismiss('cancel');
        };
        $scope.datePickerForDatecreation = {};

        $scope.datePickerForDatecreation.status = {
            opened: false
        };

        $scope.datePickerForDatecreationOpen = function($event) {
            $scope.datePickerForDatecreation.status.opened = true;
        };
        $scope.datePickerForDatefin = {};

        $scope.datePickerForDatefin.status = {
            opened: false
        };

        $scope.datePickerForDatefinOpen = function($event) {
            $scope.datePickerForDatefin.status.opened = true;
        };
}]);
