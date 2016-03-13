'use strict';

angular.module('cactusApp')
    .controller('PersonnageDetailController', function ($scope, $rootScope, $stateParams, entity, Personnage) {
        $scope.personnage = entity;
        $scope.load = function (id) {
            Personnage.get({id: id}, function(result) {
                $scope.personnage = result;
            });
        };
        var unsubscribe = $rootScope.$on('cactusApp:personnageUpdate', function(event, result) {
            $scope.personnage = result;
        });
        $scope.$on('$destroy', unsubscribe);

    });
