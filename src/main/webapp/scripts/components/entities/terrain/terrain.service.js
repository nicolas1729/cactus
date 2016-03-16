'use strict';

angular.module('cactusApp')
    .factory('Terrain', function ($resource, DateUtils) {
        return $resource('api/terrains/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    });
