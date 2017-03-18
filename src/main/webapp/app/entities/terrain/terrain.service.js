(function() {
    'use strict';
    angular
        .module('cactusApp')
        .factory('Terrain', Terrain);

    Terrain.$inject = ['$resource'];

    function Terrain ($resource) {
        var resourceUrl =  'api/terrains/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
