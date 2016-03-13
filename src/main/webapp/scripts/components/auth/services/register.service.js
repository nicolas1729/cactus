'use strict';

angular.module('cactusApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


