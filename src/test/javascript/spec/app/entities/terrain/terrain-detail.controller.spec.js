'use strict';

describe('Controller Tests', function() {

    describe('Terrain Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockTerrain;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockTerrain = jasmine.createSpy('MockTerrain');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity ,
                'Terrain': MockTerrain
            };
            createController = function() {
                $injector.get('$controller')("TerrainDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'cactusmavenApp:terrainUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
