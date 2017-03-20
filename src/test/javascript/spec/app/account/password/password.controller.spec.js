'use strict';

describe('Controller Tests', function() {
    beforeEach(mockApiAccountCall);
    beforeEach(mockI18nCalls);

    describe('PasswordController', function() {

        var $scope, $httpBackend, $q;
        var MockAuth;
        var createController;

        beforeEach(inject(function($injector) {
            $scope = $injector.get('$rootScope').$new();
            $q = $injector.get('$q');
            $httpBackend = $injector.get('$httpBackend');

            MockAuth = jasmine.createSpyObj('MockAuth', ['changePassword']);
            var locals = {
                '$scope': $scope,
                'Auth': MockAuth
            };
            createController = function() {
<<<<<<< HEAD
                $injector.get('$controller')('PasswordController', locals);
=======
                $injector.get('$controller')('PasswordController as vm', locals);
>>>>>>> 533092147c410637b99bf57166ee237aec486555
            }
        }));

        it('should show error if passwords do not match', function() {
            //GIVEN
            createController();
<<<<<<< HEAD
            $scope.password = 'password1';
            $scope.confirmPassword = 'password2';
            //WHEN
            $scope.changePassword();
            //THEN
            expect($scope.doNotMatch).toBe('ERROR');
            expect($scope.error).toBeNull();
            expect($scope.success).toBeNull();
=======
            $scope.vm.password = 'password1';
            $scope.vm.confirmPassword = 'password2';
            //WHEN
            $scope.vm.changePassword();
            //THEN
            expect($scope.vm.doNotMatch).toBe('ERROR');
            expect($scope.vm.error).toBeNull();
            expect($scope.vm.success).toBeNull();
>>>>>>> 533092147c410637b99bf57166ee237aec486555
        });
        it('should call Auth.changePassword when passwords match', function() {
            //GIVEN
            MockAuth.changePassword.and.returnValue($q.resolve());
            createController();
<<<<<<< HEAD
            $scope.password = $scope.confirmPassword = 'myPassword';

            //WHEN
            $scope.$apply($scope.changePassword);
=======
            $scope.vm.password = $scope.vm.confirmPassword = 'myPassword';

            //WHEN
            $scope.$apply($scope.vm.changePassword);
>>>>>>> 533092147c410637b99bf57166ee237aec486555

            //THEN
            expect(MockAuth.changePassword).toHaveBeenCalledWith('myPassword');
        });

        it('should set success to OK upon success', function() {
            //GIVEN
            MockAuth.changePassword.and.returnValue($q.resolve());
            createController();
<<<<<<< HEAD
            $scope.password = $scope.confirmPassword = 'myPassword';

            //WHEN
            $scope.$apply($scope.changePassword);

            //THEN
            expect($scope.doNotMatch).toBeNull();
            expect($scope.error).toBeNull();
            expect($scope.success).toBe('OK');
=======
            $scope.vm.password = $scope.vm.confirmPassword = 'myPassword';

            //WHEN
            $scope.$apply($scope.vm.changePassword);

            //THEN
            expect($scope.vm.doNotMatch).toBeNull();
            expect($scope.vm.error).toBeNull();
            expect($scope.vm.success).toBe('OK');
>>>>>>> 533092147c410637b99bf57166ee237aec486555
        });

        it('should notify of error if change password fails', function() {
            //GIVEN
            MockAuth.changePassword.and.returnValue($q.reject());
            createController();
<<<<<<< HEAD
            $scope.password = $scope.confirmPassword = 'myPassword';

            //WHEN
            $scope.$apply($scope.changePassword);

            //THEN
            expect($scope.doNotMatch).toBeNull();
            expect($scope.success).toBeNull();
            expect($scope.error).toBe('ERROR');
=======
            $scope.vm.password = $scope.vm.confirmPassword = 'myPassword';

            //WHEN
            $scope.$apply($scope.vm.changePassword);

            //THEN
            expect($scope.vm.doNotMatch).toBeNull();
            expect($scope.vm.success).toBeNull();
            expect($scope.vm.error).toBe('ERROR');
>>>>>>> 533092147c410637b99bf57166ee237aec486555
        });
    });
});
