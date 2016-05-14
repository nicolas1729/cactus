'use strict';

angular.module('cactusApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('personnage', {
                parent: 'entity',
                url: '/personnages',
                data: {
                    authorities: ['ROLE_USER'],
                    pageTitle: 'cactusApp.personnage.home.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/personnage/personnages.html',
                        controller: 'PersonnageController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('personnage');
                        $translatePartialLoader.addPart('global');
                        return $translate.refresh();
                    }]
                }
            })
            .state('personnage.detail', {
                parent: 'entity',
                url: '/personnage/{id}',
                data: {
                    authorities: ['ROLE_USER'],
                    pageTitle: 'cactusApp.personnage.detail.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/personnage/personnage-detail.html',
                        controller: 'PersonnageDetailController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('personnage');
                        return $translate.refresh();
                    }],
                    entity: ['$stateParams', 'Personnage', function($stateParams, Personnage) {
                        return Personnage.get({id : $stateParams.id});
                    }]
                }
            })
            .state('personnage.new', {
                parent: 'personnage',
                url: '/new',
                data: {
                    authorities: ['ROLE_USER'],
                },
                onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                    $uibModal.open({
                        templateUrl: 'scripts/app/entities/personnage/personnage-dialog.html',
                        controller: 'PersonnageDialogController',
                        size: 'lg',
                        resolve: {
                            entity: function () {
                                return {
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
                            }
                        }
                    }).result.then(function(result) {
                        $state.go('personnage', null, { reload: true });
                    }, function() {
                        $state.go('personnage');
                    })
                }]
            })
            .state('personnage.edit', {
                parent: 'personnage',
                url: '/{id}/edit',
                data: {
                    authorities: ['ROLE_USER'],
                },
                onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                    $uibModal.open({
                        templateUrl: 'scripts/app/entities/personnage/personnage-dialog.html',
                        controller: 'PersonnageDialogController',
                        size: 'lg',
                        resolve: {
                            entity: ['Personnage', function(Personnage) {
                                return Personnage.get({id : $stateParams.id});
                            }]
                        }
                    }).result.then(function(result) {
                        $state.go('personnage', null, { reload: true });
                    }, function() {
                        $state.go('^');
                    })
                }]
            })
            .state('personnage.delete', {
                parent: 'personnage',
                url: '/{id}/delete',
                data: {
                    authorities: ['ROLE_USER'],
                },
                onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                    $uibModal.open({
                        templateUrl: 'scripts/app/entities/personnage/personnage-delete-dialog.html',
                        controller: 'PersonnageDeleteController',
                        size: 'md',
                        resolve: {
                            entity: ['Personnage', function(Personnage) {
                                return Personnage.get({id : $stateParams.id});
                            }]
                        }
                    }).result.then(function(result) {
                        $state.go('personnage', null, { reload: true });
                    }, function() {
                        $state.go('^');
                    })
                }]
            });
    });
