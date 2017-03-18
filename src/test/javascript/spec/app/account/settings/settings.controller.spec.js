'use strict';

describe('Controller Tests', function() {

    beforeEach(mockApiAccountCall);
    beforeEach(mockI18nCalls);

    describe('SettingsController', function() {

        var $scope, $q; // actual implementations
        var MockPrincipal, MockAuth; // mocks
        var createController; // local utility functions

        beforeEach(inject(function($injector) {
            $q = $injector.get('$q');
            $scope = $injector.get("$rootScope").$new();
            MockAuth = jasmine.createSpyObj('MockAuth', ['updateAccount']);
            MockPrincipal = jasmine.createSpyObj('MockPrincipal', ['identity']);
            var locals = {
                '$scope': $scope,
                'Principal': MockPrincipal,
                'Auth': MockAuth
            };
            createController = function() {
<<<<<<< HEAD
                $injector.get('$controller')('SettingsController', locals);
=======
                $injector.get('$controller')('SettingsController as vm', locals);
>>>>>>> 533092147c410637b99bf57166ee237aec486555
            }
        }));

        it('should send the current identity upon save', function() {
            //GIVEN
            var accountValues = {
                firstName: "John",
                lastName: "Doe",

                activated: true,
                email: "john.doe@mail.com",
                langKey: "en",
                login: "john"
            };
            MockPrincipal.identity.and.returnValue($q.resolve(accountValues));
            MockAuth.updateAccount.and.returnValue($q.resolve());
            $scope.$apply(createController);

            //WHEN
<<<<<<< HEAD
            $scope.save();
=======
            $scope.vm.save();
>>>>>>> 533092147c410637b99bf57166ee237aec486555

            //THEN
            expect(MockPrincipal.identity).toHaveBeenCalled();
            expect(MockAuth.updateAccount).toHaveBeenCalledWith(accountValues);
<<<<<<< HEAD
            expect($scope.settingsAccount).toEqual(accountValues);
=======
            expect($scope.vm.settingsAccount).toEqual(accountValues);
>>>>>>> 533092147c410637b99bf57166ee237aec486555
        });

        it('should notify of success upon successful save', function() {
            //GIVEN
            var accountValues = {
                firstName: "John",
                lastName: "Doe"
            };
            MockPrincipal.identity.and.returnValue($q.resolve(accountValues));
            MockAuth.updateAccount.and.returnValue($q.resolve());
            createController();

            //WHEN
<<<<<<< HEAD
            $scope.$apply($scope.save);

            //THEN
            expect($scope.error).toBeNull();
            expect($scope.success).toBe('OK');
=======
            $scope.$apply($scope.vm.save);

            //THEN
            expect($scope.vm.error).toBeNull();
            expect($scope.vm.success).toBe('OK');
>>>>>>> 533092147c410637b99bf57166ee237aec486555
        });

        it('should notify of error upon failed save', function() {
            //GIVEN
            MockPrincipal.identity.and.returnValue($q.resolve({}));
            MockAuth.updateAccount.and.returnValue($q.reject());
            createController();

            //WHEN
<<<<<<< HEAD
            $scope.$apply($scope.save);

            //THEN
            expect($scope.error).toEqual('ERROR');
            expect($scope.success).toBeNull();
=======
            $scope.$apply($scope.vm.save);

            //THEN
            expect($scope.vm.error).toEqual('ERROR');
            expect($scope.vm.success).toBeNull();
>>>>>>> 533092147c410637b99bf57166ee237aec486555
        });
    });
});
