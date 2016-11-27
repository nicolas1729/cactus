(function() {
    'use strict';

    angular
        .module('cactusApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('personnage', {
            parent: 'entity',
            url: '/personnage?page&sort&search',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'Personnages'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/personnage/personnages.html',
                    controller: 'PersonnageController',
                    controllerAs: 'vm'
                }
            },
            params: {
                page: {
                    value: '1',
                    squash: true
                },
                sort: {
                    value: 'id,asc',
                    squash: true
                },
                search: null
            },
            resolve: {
                pagingParams: ['$stateParams', 'PaginationUtil', function ($stateParams, PaginationUtil) {
                    return {
                        page: PaginationUtil.parsePage($stateParams.page),
                        sort: $stateParams.sort,
                        predicate: PaginationUtil.parsePredicate($stateParams.sort),
                        ascending: PaginationUtil.parseAscending($stateParams.sort),
                        search: $stateParams.search
                    };
                }],
            }
        })
        .state('personnage-detail', {
            parent: 'entity',
            url: '/personnage/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'Personnage'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/personnage/personnage-detail.html',
                    controller: 'PersonnageDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                entity: ['$stateParams', 'Personnage', function($stateParams, Personnage) {
                    return Personnage.get({id : $stateParams.id}).$promise;
                }],
                previousState: ["$state", function ($state) {
                    var currentStateData = {
                        name: $state.current.name || 'personnage',
                        params: $state.params,
                        url: $state.href($state.current.name, $state.params)
                    };
                    return currentStateData;
                }]
            }
        })
        .state('personnage-detail.edit', {
            parent: 'personnage-detail',
            url: '/detail/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/personnage/personnage-dialog.html',
                    controller: 'PersonnageDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Personnage', function(Personnage) {
                            return Personnage.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('^', {}, { reload: false });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('personnage.new', {
            parent: 'personnage',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/personnage/personnage-dialog.html',
                    controller: 'PersonnageDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                nom: null,
                                description: null,
                                mort: false,
                                blessure: null,
                                fatigue: null,
                                compeau: null,
                                compnour: null,
                                compfabriquer: null,
                                compconstruire: null,
                                compcombat: null,
                                compsoigner: null,
                                datecreation: null,
                                datefin: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('personnage', null, { reload: 'personnage' });
                }, function() {
                    $state.go('personnage');
                });
            }]
        })
        .state('personnage.edit', {
            parent: 'personnage',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/personnage/personnage-dialog.html',
                    controller: 'PersonnageDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Personnage', function(Personnage) {
                            return Personnage.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('personnage', null, { reload: 'personnage' });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('personnage.delete', {
            parent: 'personnage',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/personnage/personnage-delete-dialog.html',
                    controller: 'PersonnageDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['Personnage', function(Personnage) {
                            return Personnage.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('personnage', null, { reload: 'personnage' });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
