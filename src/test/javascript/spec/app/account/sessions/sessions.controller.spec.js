'use strict';

describe('Controller Tests', function() {

    beforeEach(mockApiAccountCall);
    beforeEach(mockI18nCalls);

    describe('SessionsController', function() {

        var $scope, $q; // actual implementations
        var MockSessions, MockPrincipal; // mocks
        var createController; // local utility function

        var sessions = [{
<<<<<<< HEAD
            formattedTokenDate: "15 October 2015",
            ipAddress: "0:0:0:0:0:0:0:1",
            series: "xxxxxx==",
            userAgent: "Mozilla/5.0"
=======
            tokenDate: '2015-10-15',
            ipAddress: '0:0:0:0:0:0:0:1',
            series: 'xxxxxx==',
            userAgent: 'Mozilla/5.0'
>>>>>>> 533092147c410637b99bf57166ee237aec486555
        }];

        beforeEach(inject(function($injector) {
            $q = $injector.get('$q');
            $scope = $injector.get('$rootScope').$new();
            MockSessions = jasmine.createSpyObj('MockSessions', ['getAll', 'delete']);
            MockPrincipal = jasmine.createSpyObj('MockPrincipal', ['identity']);

            var locals = {
                '$scope': $scope,
                'Sessions': MockSessions,
                'Principal': MockPrincipal
            };
            createController = function() {
<<<<<<< HEAD
                return $injector.get('$controller')('SessionsController', locals);
=======
                return $injector.get('$controller')('SessionsController as vm', locals);
>>>>>>> 533092147c410637b99bf57166ee237aec486555
            };
        }));

        it('should define its initial state', function() {
            MockPrincipal.identity.and.returnValue($q.resolve({
                id: 'fuzzer'
            }));
            MockSessions.getAll.and.returnValue(sessions);
            // given
            $scope.$apply(createController);
            // then
            expect(MockPrincipal.identity).toHaveBeenCalled();
            expect(MockSessions.getAll).toHaveBeenCalled();
<<<<<<< HEAD
            expect($scope.success).toBeNull();
            expect($scope.error).toBeNull();
            expect($scope.account).toEqual({
                id: 'fuzzer'
            });
            expect($scope.sessions).toEqual(sessions);
=======
            expect($scope.vm.success).toBeNull();
            expect($scope.vm.error).toBeNull();
            expect($scope.vm.account).toEqual({
                id: 'fuzzer'
            });
            expect($scope.vm.sessions).toEqual(sessions);
>>>>>>> 533092147c410637b99bf57166ee237aec486555
        });

        it('should call delete on Sessions to invalidate a session', function() {
            MockPrincipal.identity.and.returnValue($q.resolve({
                id: 'fuzzer'
            }));
            MockSessions.getAll.and.returnValue(sessions);
            // given
            createController();
<<<<<<< HEAD
            $scope.invalidate('xyz');
=======
            $scope.vm.invalidate('xyz');
>>>>>>> 533092147c410637b99bf57166ee237aec486555
            $scope.$apply();
            // then
            expect(MockSessions.delete).toHaveBeenCalledWith({
                series: 'xyz'
            }, jasmine.any(Function), jasmine.any(Function));
        });

        it('should call delete on Sessions and notify of error', function() {
            MockPrincipal.identity.and.returnValue($q.resolve({
                id: 'fuzzer'
            }));
            MockSessions.getAll.and.returnValue(sessions);
            MockSessions.delete.and.callFake(function resourceDelete(arg, success, failure) {
                failure();
            });
            // given
            createController();
<<<<<<< HEAD
            $scope.invalidate('xyz');
            $scope.$apply();
            // then
            expect($scope.success).toBeNull();
            expect($scope.error).toBe('ERROR');
=======
            $scope.vm.invalidate('xyz');
            $scope.$apply();
            // then
            expect($scope.vm.success).toBeNull();
            expect($scope.vm.error).toBe('ERROR');
>>>>>>> 533092147c410637b99bf57166ee237aec486555
        });

        it('should call notify of success upon session invalidation', function() {
            MockPrincipal.identity.and.returnValue($q.resolve({
                id: 'fuzzer'
            }));
            MockSessions.getAll.and.returnValue(sessions);
            MockSessions.delete.and.callFake(function resourceDelete(arg, success, failure) {
                success();
            });
            // given
            createController();
<<<<<<< HEAD
            $scope.invalidate('xyz');
            $scope.$apply();
            // then
            expect($scope.error).toBeNull();
            expect($scope.success).toBe('OK');
=======
            $scope.vm.invalidate('xyz');
            $scope.$apply();
            // then
            expect($scope.vm.error).toBeNull();
            expect($scope.vm.success).toBe('OK');
>>>>>>> 533092147c410637b99bf57166ee237aec486555
        });
    });
});
