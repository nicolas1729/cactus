'use strict';

angular.module('cactusApp')
    .controller('PersonnageController', function ($scope, $state, Personnage, ParseLinks) {

        $scope.personnages = [];
        $scope.predicate = 'id';
        $scope.reverse = true;
        $scope.page = 1;
        $scope.loadAll = function() {
            Personnage.query({page: $scope.page - 1, size: 20, sort: [$scope.predicate + ',' + ($scope.reverse ? 'asc' : 'desc'), 'id']}, function(result, headers) {
                $scope.links = ParseLinks.parse(headers('link'));
                $scope.totalItems = headers('X-Total-Count');
                $scope.personnages = result;
            });
        };
        $scope.loadPage = function(page) {
            $scope.page = page;
            $scope.loadAll();
        };
        $scope.loadAll();


        $scope.refresh = function () {
            $scope.loadAll();
            $scope.clear();
        };

        $scope.clear = function () {
            $scope.personnage = {
                nom: null,
                description: null,
                mort: null,
                fatigue: null,
                blessure: null,
                compcombat: null,
                compconstruire: null,
                compeau: null,
                comfabriquer: null,
                compnour: null,
                compsoigner: null,
                datecreation: null,
                datefin: null,
                id: null
            };
        };
    });
