(function() {
    'use strict';

    angular
        .module('cactusApp')
        .factory('LieuSearch', LieuSearch);

    LieuSearch.$inject = ['$resource'];

    function LieuSearch($resource) {
        var resourceUrl =  'api/_search/lieus/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
