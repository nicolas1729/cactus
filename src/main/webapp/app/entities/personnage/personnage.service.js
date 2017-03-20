(function() {
    'use strict';
    angular
        .module('cactusApp')
        .factory('Personnage', Personnage);

    Personnage.$inject = ['$resource', 'DateUtils'];

    function Personnage ($resource, DateUtils) {
        var resourceUrl =  'api/personnages/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                        data.datecreation = DateUtils.convertLocalDateFromServer(data.datecreation);
                        data.datefin = DateUtils.convertLocalDateFromServer(data.datefin);
                    }
                    return data;
                }
            },
            'update': {
                method: 'PUT',
                transformRequest: function (data) {
                    var copy = angular.copy(data);
                    copy.datecreation = DateUtils.convertLocalDateToServer(copy.datecreation);
                    copy.datefin = DateUtils.convertLocalDateToServer(copy.datefin);
                    return angular.toJson(copy);
                }
            },
            'save': {
                method: 'POST',
                transformRequest: function (data) {
                    var copy = angular.copy(data);
                    copy.datecreation = DateUtils.convertLocalDateToServer(copy.datecreation);
                    copy.datefin = DateUtils.convertLocalDateToServer(copy.datefin);
                    return angular.toJson(copy);
                }
            }
        });
    }
})();
