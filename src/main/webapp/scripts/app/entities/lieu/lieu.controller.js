'use strict';

angular.module('cactusApp')
    .controller('LieuController', function ($scope, $state, Lieu) {

        $scope.lieus = [];
        $scope.loadAll = function() {
            Lieu.query(function(result) {
               $scope.lieus = result;
            });
        };
        $scope.loadAll();


        $scope.refresh = function () {
            $scope.loadAll();
            $scope.clear();
        };

        $scope.clear = function () {
            $scope.lieu = {
                description: null,
                latitude: null,
                longitude: null,
                id: null
            };
        };
    });
