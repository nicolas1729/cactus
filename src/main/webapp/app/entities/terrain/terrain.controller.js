(function() {
    'use strict';

    angular
        .module('cactusApp')
        .controller('TerrainController', TerrainController);

    TerrainController.$inject = ['$scope', '$state', 'Terrain', 'TerrainSearch'];

    function TerrainController ($scope, $state, Terrain, TerrainSearch) {
        var vm = this;

        vm.terrains = [];
        vm.search = search;
        vm.loadAll = loadAll;

        loadAll();

        function loadAll() {
            Terrain.query(function(result) {
                vm.terrains = result;
            });
        }

        function search () {
            if (!vm.searchQuery) {
                return vm.loadAll();
            }
            TerrainSearch.query({query: vm.searchQuery}, function(result) {
                vm.terrains = result;
            });
        }    }
})();
