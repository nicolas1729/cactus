'use strict';

angular.module('cactusApp').controller('TerrainDialogController',
    ['$scope', '$stateParams', '$uibModalInstance', 'entity', 'Terrain',
        function($scope, $stateParams, $uibModalInstance, entity, Terrain) {

        $scope.terrain = entity;
        $scope.load = function(id) {
            Terrain.get({id : id}, function(result) {
                $scope.terrain = result;
            });
        };

        var onSaveSuccess = function (result) {
            $scope.$emit('cactusApp:terrainUpdate', result);
            $uibModalInstance.close(result);
            $scope.isSaving = false;
        };

        var onSaveError = function (result) {
            $scope.isSaving = false;
        };

        $scope.save = function () {
            $scope.isSaving = true;
            if ($scope.terrain.id != null) {
                Terrain.update($scope.terrain, onSaveSuccess, onSaveError);
            } else {
                Terrain.save($scope.terrain, onSaveSuccess, onSaveError);
            }
        };

        $scope.clear = function() {
            $uibModalInstance.dismiss('cancel');
        };
}]);
