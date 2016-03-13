'use strict';

angular.module('cactusApp')
	.controller('PersonnageDeleteController', function($scope, $uibModalInstance, entity, Personnage) {

        $scope.personnage = entity;
        $scope.clear = function() {
            $uibModalInstance.dismiss('cancel');
        };
        $scope.confirmDelete = function (id) {
            Personnage.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        };

    });
