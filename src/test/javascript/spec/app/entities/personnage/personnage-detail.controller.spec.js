'use strict';

describe('Controller Tests', function() {

    describe('Personnage Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPersonnage;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockPersonnage = jasmine.createSpy('MockPersonnage');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity ,
                'Personnage': MockPersonnage
            };
            createController = function() {
                $injector.get('$controller')("PersonnageDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'cactusApp:personnageUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
