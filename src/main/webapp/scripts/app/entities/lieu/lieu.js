'use strict';

angular.module('cactusmavenApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('lieu', {
                parent: 'entity',
                url: '/lieus',
                data: {
                    authorities: ['ROLE_USER'],
                    pageTitle: 'cactusmavenApp.lieu.home.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/lieu/lieus.html',
                        controller: 'LieuController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('lieu');
                        $translatePartialLoader.addPart('global');
                        return $translate.refresh();
                    }]
                }
            })
            .state('lieu.detail', {
                parent: 'entity',
                url: '/lieu/{id}',
                data: {
                    authorities: ['ROLE_USER'],
                    pageTitle: 'cactusmavenApp.lieu.detail.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/lieu/lieu-detail.html',
                        controller: 'LieuDetailController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('lieu');
                        return $translate.refresh();
                    }],
                    entity: ['$stateParams', 'Lieu', function($stateParams, Lieu) {
                        return Lieu.get({id : $stateParams.id});
                    }]
                }
            })
            .state('lieu.new', {
                parent: 'lieu',
                url: '/new',
                data: {
                    authorities: ['ROLE_USER'],
                },
                onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                    $uibModal.open({
                        templateUrl: 'scripts/app/entities/lieu/lieu-dialog.html',
                        controller: 'LieuDialogController',
                        size: 'lg',
                        resolve: {
                            entity: function () {
                                return {
                                    description: null,
                                    latitude: null,
                                    longitude: null,
                                    id: null
                                };
                            }
                        }
                    }).result.then(function(result) {
                        $state.go('lieu', null, { reload: true });
                    }, function() {
                        $state.go('lieu');
                    })
                }]
            })
            .state('lieu.edit', {
                parent: 'lieu',
                url: '/{id}/edit',
                data: {
                    authorities: ['ROLE_USER'],
                },
                onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                    $uibModal.open({
                        templateUrl: 'scripts/app/entities/lieu/lieu-dialog.html',
                        controller: 'LieuDialogController',
                        size: 'lg',
                        resolve: {
                            entity: ['Lieu', function(Lieu) {
                                return Lieu.get({id : $stateParams.id});
                            }]
                        }
                    }).result.then(function(result) {
                        $state.go('lieu', null, { reload: true });
                    }, function() {
                        $state.go('^');
                    })
                }]
            })
            .state('lieu.delete', {
                parent: 'lieu',
                url: '/{id}/delete',
                data: {
                    authorities: ['ROLE_USER'],
                },
                onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                    $uibModal.open({
                        templateUrl: 'scripts/app/entities/lieu/lieu-delete-dialog.html',
                        controller: 'LieuDeleteController',
                        size: 'md',
                        resolve: {
                            entity: ['Lieu', function(Lieu) {
                                return Lieu.get({id : $stateParams.id});
                            }]
                        }
                    }).result.then(function(result) {
                        $state.go('lieu', null, { reload: true });
                    }, function() {
                        $state.go('^');
                    })
                }]
            });
    });
