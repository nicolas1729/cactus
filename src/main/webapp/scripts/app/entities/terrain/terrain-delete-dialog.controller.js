'use strict';

angular.module('cactusmavenApp')
	.controller('TerrainDeleteController', function($scope, $uibModalInstance, entity, Terrain) {

        $scope.terrain = entity;
        $scope.clear = function() {
            $uibModalInstance.dismiss('cancel');
        };
        $scope.confirmDelete = function (id) {
            Terrain.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        };

    });
