'use strict';

angular.module('cactusApp')
    .controller('TerrainDetailController', function ($scope, $rootScope, $stateParams, entity, Terrain) {
        $scope.terrain = entity;
        $scope.load = function (id) {
            Terrain.get({id: id}, function(result) {
                $scope.terrain = result;
            });
        };
        var unsubscribe = $rootScope.$on('cactusApp:terrainUpdate', function(event, result) {
            $scope.terrain = result;
        });
        $scope.$on('$destroy', unsubscribe);

    });
