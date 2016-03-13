'use strict';

angular.module('cactusmavenApp')
    .factory('Lieu', function ($resource, DateUtils) {
        return $resource('api/lieus/:id', {}, {
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
