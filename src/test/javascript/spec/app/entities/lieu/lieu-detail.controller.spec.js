'use strict';

describe('Controller Tests', function() {

    describe('Lieu Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockLieu;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockLieu = jasmine.createSpy('MockLieu');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity ,
                'Lieu': MockLieu
            };
            createController = function() {
                $injector.get('$controller')("LieuDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'cactusmavenApp:lieuUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
