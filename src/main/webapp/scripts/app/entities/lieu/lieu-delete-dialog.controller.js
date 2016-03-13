'use strict';

angular.module('cactusmavenApp')
	.controller('LieuDeleteController', function($scope, $uibModalInstance, entity, Lieu) {

        $scope.lieu = entity;
        $scope.clear = function() {
            $uibModalInstance.dismiss('cancel');
        };
        $scope.confirmDelete = function (id) {
            Lieu.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        };

    });
