'use strict';

describe('Controller Tests', function() {

<<<<<<< HEAD
    describe('Personnage Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPersonnage;
=======
    describe('Personnage Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPreviousState, MockPersonnage, MockUser;
>>>>>>> 533092147c410637b99bf57166ee237aec486555
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
<<<<<<< HEAD
            MockPersonnage = jasmine.createSpy('MockPersonnage');
=======
            MockPreviousState = jasmine.createSpy('MockPreviousState');
            MockPersonnage = jasmine.createSpy('MockPersonnage');
            MockUser = jasmine.createSpy('MockUser');
>>>>>>> 533092147c410637b99bf57166ee237aec486555
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
<<<<<<< HEAD
                'entity': MockEntity ,
                'Personnage': MockPersonnage
=======
                'entity': MockEntity,
                'previousState': MockPreviousState,
                'Personnage': MockPersonnage,
                'User': MockUser
>>>>>>> 533092147c410637b99bf57166ee237aec486555
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
