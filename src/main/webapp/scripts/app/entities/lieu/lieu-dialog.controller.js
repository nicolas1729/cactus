'use strict';

angular.module('cactusmavenApp').controller('LieuDialogController',
    ['$scope', '$stateParams', '$uibModalInstance', 'entity', 'Lieu',
        function($scope, $stateParams, $uibModalInstance, entity, Lieu) {

        $scope.lieu = entity;
        $scope.load = function(id) {
            Lieu.get({id : id}, function(result) {
                $scope.lieu = result;
            });
        };

        var onSaveSuccess = function (result) {
            $scope.$emit('cactusmavenApp:lieuUpdate', result);
            $uibModalInstance.close(result);
            $scope.isSaving = false;
        };

        var onSaveError = function (result) {
            $scope.isSaving = false;
        };

        $scope.save = function () {
            $scope.isSaving = true;
            if ($scope.lieu.id != null) {
                Lieu.update($scope.lieu, onSaveSuccess, onSaveError);
            } else {
                Lieu.save($scope.lieu, onSaveSuccess, onSaveError);
            }
        };

        $scope.clear = function() {
            $uibModalInstance.dismiss('cancel');
        };
}]);
