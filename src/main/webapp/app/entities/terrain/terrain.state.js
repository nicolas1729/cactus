(function() {
    'use strict';

    angular
        .module('cactusApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('terrain', {
            parent: 'entity',
            url: '/terrain',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'Terrains'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/terrain/terrains.html',
                    controller: 'TerrainController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
            }
        })
        .state('terrain-detail', {
            parent: 'entity',
            url: '/terrain/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'Terrain'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/terrain/terrain-detail.html',
                    controller: 'TerrainDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                entity: ['$stateParams', 'Terrain', function($stateParams, Terrain) {
                    return Terrain.get({id : $stateParams.id}).$promise;
                }],
                previousState: ["$state", function ($state) {
                    var currentStateData = {
                        name: $state.current.name || 'terrain',
                        params: $state.params,
                        url: $state.href($state.current.name, $state.params)
                    };
                    return currentStateData;
                }]
            }
        })
        .state('terrain-detail.edit', {
            parent: 'terrain-detail',
            url: '/detail/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/terrain/terrain-dialog.html',
                    controller: 'TerrainDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Terrain', function(Terrain) {
                            return Terrain.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('^', {}, { reload: false });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('terrain.new', {
            parent: 'terrain',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/terrain/terrain-dialog.html',
                    controller: 'TerrainDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                nom: null,
                                description: null,
                                prodeau: 0,
                                prodnour: 0,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('terrain', null, { reload: 'terrain' });
                }, function() {
                    $state.go('terrain');
                });
            }]
        })
        .state('terrain.edit', {
            parent: 'terrain',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/terrain/terrain-dialog.html',
                    controller: 'TerrainDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Terrain', function(Terrain) {
                            return Terrain.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('terrain', null, { reload: 'terrain' });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('terrain.delete', {
            parent: 'terrain',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/terrain/terrain-delete-dialog.html',
                    controller: 'TerrainDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['Terrain', function(Terrain) {
                            return Terrain.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('terrain', null, { reload: 'terrain' });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
