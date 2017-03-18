'use strict';

describe('Controller Tests', function() {

    beforeEach(mockApiAccountCall);
    beforeEach(mockI18nCalls);

    describe('ResetFinishController', function() {

        var $scope, $q; // actual implementations
        var MockStateParams, MockTimeout, MockAuth; // mocks
        var createController; // local utility function

        beforeEach(inject(function($injector) {
            $q = $injector.get('$q');
            $scope = $injector.get('$rootScope').$new();
            MockStateParams = jasmine.createSpy('MockStateParams');

            MockTimeout = jasmine.createSpy('MockTimeout');
            MockAuth = jasmine.createSpyObj('MockAuth', ['resetPasswordInit']);

            var locals = {
                '$scope': $scope,
                '$stateParams': MockStateParams,
                '$timeout': MockTimeout,
                'Auth': MockAuth
            };
            createController = function() {
<<<<<<< HEAD
                return $injector.get('$controller')('ResetFinishController', locals);
=======
                return $injector.get('$controller')('ResetFinishController as vm', locals);
>>>>>>> 533092147c410637b99bf57166ee237aec486555
            };
        }));

        it('should define its initial state', function() {
            // given
            MockStateParams.key = 'XYZPDQ';
            createController();

            // then
<<<<<<< HEAD
            expect($scope.keyMissing).toBeFalsy();

            expect($scope.doNotMatch).toBeNull();
            expect($scope.resetAccount).toEqual({});
=======
            expect($scope.vm.keyMissing).toBeFalsy();

            expect($scope.vm.doNotMatch).toBeNull();
            expect($scope.vm.resetAccount).toEqual({});
>>>>>>> 533092147c410637b99bf57166ee237aec486555
        });

        it('registers a timeout handler set set focus', function() {
            // given
            var MockAngular = jasmine.createSpyObj('MockAngular', ['element']);
            var MockElement = jasmine.createSpyObj('MockElement', ['focus']);
            MockAngular.element.and.returnValue(MockElement);
            MockTimeout.and.callFake(function(callback) {
                withMockedAngular(MockAngular, callback)();
            });
            createController();

            // then
            expect(MockTimeout).toHaveBeenCalledWith(jasmine.any(Function));
<<<<<<< HEAD
            expect(MockAngular.element).toHaveBeenCalledWith('[ng-model="resetAccount.password"]');
=======
            expect(MockAngular.element).toHaveBeenCalledWith('#password');
>>>>>>> 533092147c410637b99bf57166ee237aec486555
            expect(MockElement.focus).toHaveBeenCalled();
        });

    });
});
