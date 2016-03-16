'use strict';

angular.module('cactusApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('terrain', {
                parent: 'entity',
                url: '/terrains',
                data: {
                    authorities: ['ROLE_USER'],
                    pageTitle: 'cactusApp.terrain.home.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/terrain/terrains.html',
                        controller: 'TerrainController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('terrain');
                        $translatePartialLoader.addPart('global');
                        return $translate.refresh();
                    }]
                }
            })
            .state('terrain.detail', {
                parent: 'entity',
                url: '/terrain/{id}',
                data: {
                    authorities: ['ROLE_USER'],
                    pageTitle: 'cactusApp.terrain.detail.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/terrain/terrain-detail.html',
                        controller: 'TerrainDetailController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('terrain');
                        return $translate.refresh();
                    }],
                    entity: ['$stateParams', 'Terrain', function($stateParams, Terrain) {
                        return Terrain.get({id : $stateParams.id});
                    }]
                }
            })
            .state('terrain.new', {
                parent: 'terrain',
                url: '/new',
                data: {
                    authorities: ['ROLE_USER']
                },
                onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                    $uibModal.open({
                        templateUrl: 'scripts/app/entities/terrain/terrain-dialog.html',
                        controller: 'TerrainDialogController',
                        size: 'lg',
                        resolve: {
                            entity: function () {
                                return {
                                    nom: null,
                                    description: null,
                                    prodeau: null,
                                    prodnour: null,
                                    id: null
                                };
                            }
                        }
                    }).result.then(function(result) {
                        $state.go('terrain', null, { reload: true });
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
                        templateUrl: 'scripts/app/entities/terrain/terrain-dialog.html',
                        controller: 'TerrainDialogController',
                        size: 'lg',
                        resolve: {
                            entity: ['Terrain', function(Terrain) {
                                return Terrain.get({id : $stateParams.id});
                            }]
                        }
                    }).result.then(function(result) {
                        $state.go('terrain', null, { reload: true });
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
                        templateUrl: 'scripts/app/entities/terrain/terrain-delete-dialog.html',
                        controller: 'TerrainDeleteController',
                        size: 'md',
                        resolve: {
                            entity: ['Terrain', function(Terrain) {
                                return Terrain.get({id : $stateParams.id});
                            }]
                        }
                    }).result.then(function(result) {
                        $state.go('terrain', null, { reload: true });
                    }, function() {
                        $state.go('^');
                    });
                }]
            });
    });
