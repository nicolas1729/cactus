'use strict';

describe('Controller Tests', function() {

<<<<<<< HEAD
    describe('Lieu Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockLieu;
=======
    describe('Lieu Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPreviousState, MockLieu, MockTerrain;
>>>>>>> 533092147c410637b99bf57166ee237aec486555
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
<<<<<<< HEAD
            MockLieu = jasmine.createSpy('MockLieu');
=======
            MockPreviousState = jasmine.createSpy('MockPreviousState');
            MockLieu = jasmine.createSpy('MockLieu');
            MockTerrain = jasmine.createSpy('MockTerrain');
>>>>>>> 533092147c410637b99bf57166ee237aec486555
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
<<<<<<< HEAD
                'entity': MockEntity ,
                'Lieu': MockLieu
=======
                'entity': MockEntity,
                'previousState': MockPreviousState,
                'Lieu': MockLieu,
                'Terrain': MockTerrain
>>>>>>> 533092147c410637b99bf57166ee237aec486555
            };
            createController = function() {
                $injector.get('$controller')("LieuDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'cactusApp:lieuUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
