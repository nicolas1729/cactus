'use strict';

angular.module('cactusApp')
    .factory('Personnage', function ($resource, DateUtils) {
        return $resource('api/personnages/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    data.datecreation = DateUtils.convertLocaleDateFromServer(data.datecreation);
                    data.datefin = DateUtils.convertLocaleDateFromServer(data.datefin);
                    return data;
                }
            },
            'update': {
                method: 'PUT',
                transformRequest: function (data) {
                    data.datecreation = DateUtils.convertLocaleDateToServer(data.datecreation);
                    data.datefin = DateUtils.convertLocaleDateToServer(data.datefin);
                    return angular.toJson(data);
                }
            },
            'save': {
                method: 'POST',
                transformRequest: function (data) {
                    data.datecreation = DateUtils.convertLocaleDateToServer(data.datecreation);
                    data.datefin = DateUtils.convertLocaleDateToServer(data.datefin);
                    return angular.toJson(data);
                }
            }
        });
    });
