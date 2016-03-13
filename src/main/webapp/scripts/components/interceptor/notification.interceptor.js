 'use strict';

angular.module('cactusApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-cactusApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-cactusApp-params')});
                }
                return response;
            }
        };
    });
