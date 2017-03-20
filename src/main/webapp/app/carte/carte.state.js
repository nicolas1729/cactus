(function() {
    'use strict';

    angular
        .module('cactusApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('carte', {
            parent: 'app',
            url: '/carte',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/carte/carte.html',
                    controller: 'CarteController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
