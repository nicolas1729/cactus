(function() {
    'use strict';

    angular
        .module('cactusApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('lieu', {
            parent: 'entity',
            url: '/lieu?page&sort&search',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'Lieus'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/lieu/lieus.html',
                    controller: 'LieuController',
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
        .state('lieu-detail', {
            parent: 'entity',
            url: '/lieu/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'Lieu'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/lieu/lieu-detail.html',
                    controller: 'LieuDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                entity: ['$stateParams', 'Lieu', function($stateParams, Lieu) {
                    return Lieu.get({id : $stateParams.id}).$promise;
                }],
                previousState: ["$state", function ($state) {
                    var currentStateData = {
                        name: $state.current.name || 'lieu',
                        params: $state.params,
                        url: $state.href($state.current.name, $state.params)
                    };
                    return currentStateData;
                }]
            }
        })
        .state('lieu-detail.edit', {
            parent: 'lieu-detail',
            url: '/detail/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/lieu/lieu-dialog.html',
                    controller: 'LieuDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Lieu', function(Lieu) {
                            return Lieu.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('^', {}, { reload: false });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('lieu.new', {
            parent: 'lieu',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/lieu/lieu-dialog.html',
                    controller: 'LieuDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
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
                }).result.then(function() {
                    $state.go('lieu', null, { reload: 'lieu' });
                }, function() {
                    $state.go('lieu');
                });
            }]
        })
        .state('lieu.edit', {
            parent: 'lieu',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/lieu/lieu-dialog.html',
                    controller: 'LieuDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Lieu', function(Lieu) {
                            return Lieu.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('lieu', null, { reload: 'lieu' });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('lieu.delete', {
            parent: 'lieu',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/lieu/lieu-delete-dialog.html',
                    controller: 'LieuDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['Lieu', function(Lieu) {
                            return Lieu.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('lieu', null, { reload: 'lieu' });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
