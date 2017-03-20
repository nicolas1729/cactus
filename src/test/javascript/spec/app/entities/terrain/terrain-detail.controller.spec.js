'use strict';

describe('Controller Tests', function() {

<<<<<<< HEAD
    describe('Terrain Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockTerrain;
=======
    describe('Terrain Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPreviousState, MockTerrain;
>>>>>>> 533092147c410637b99bf57166ee237aec486555
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
<<<<<<< HEAD
=======
            MockPreviousState = jasmine.createSpy('MockPreviousState');
>>>>>>> 533092147c410637b99bf57166ee237aec486555
            MockTerrain = jasmine.createSpy('MockTerrain');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
<<<<<<< HEAD
                'entity': MockEntity ,
=======
                'entity': MockEntity,
                'previousState': MockPreviousState,
>>>>>>> 533092147c410637b99bf57166ee237aec486555
                'Terrain': MockTerrain
            };
            createController = function() {
                $injector.get('$controller')("TerrainDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'cactusApp:terrainUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
