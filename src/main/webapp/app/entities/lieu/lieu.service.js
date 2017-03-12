(function() {
    'use strict';
    angular
        .module('cactusApp')
        .factory('Lieu', Lieu);

    Lieu.$inject = ['$resource'];

    function Lieu ($resource) {
        var resourceUrl =  'api/lieus/:id';

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
