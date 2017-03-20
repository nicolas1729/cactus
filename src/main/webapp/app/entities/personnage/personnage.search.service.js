(function() {
    'use strict';

    angular
        .module('cactusApp')
        .factory('PersonnageSearch', PersonnageSearch);

    PersonnageSearch.$inject = ['$resource'];

    function PersonnageSearch($resource) {
        var resourceUrl =  'api/_search/personnages/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
