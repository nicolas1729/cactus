'use strict';

angular.module('cactusApp')
    .controller('TerrainController', function ($scope, $state, Terrain) {

        $scope.terrains = [];
        $scope.loadAll = function() {
            Terrain.query(function(result) {
               $scope.terrains = result;
            });
        };
        $scope.loadAll();


        $scope.refresh = function () {
            $scope.loadAll();
            $scope.clear();
        };

        $scope.clear = function () {
            $scope.terrain = {
                nom: null,
                description: null,
                prodeau: null,
                prodnour: null,
                id: null
            };
        };
    });
