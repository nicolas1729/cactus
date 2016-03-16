'use strict';

angular.module('cactusApp')
    .controller('LieuDetailController', function ($scope, $rootScope, $stateParams, entity, Lieu) {
        $scope.lieu = entity;
        $scope.load = function (id) {
            Lieu.get({id: id}, function(result) {
                $scope.lieu = result;
            });
        };
        var unsubscribe = $rootScope.$on('cactusApp:lieuUpdate', function(event, result) {
            $scope.lieu = result;
        });
        $scope.$on('$destroy', unsubscribe);

    });
