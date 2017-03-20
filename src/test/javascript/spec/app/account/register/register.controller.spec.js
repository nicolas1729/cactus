'use strict';

describe('Controller Tests', function() {

    beforeEach(mockApiAccountCall);
    beforeEach(mockI18nCalls);

    describe('RegisterController', function() {

        var $scope, $q; // actual implementations
<<<<<<< HEAD
        var MockTimeout, MockTranslate, MockAuth; // mocks
=======
        var MockTimeout, MockAuth; // mocks
>>>>>>> 533092147c410637b99bf57166ee237aec486555
        var createController; // local utility function

        beforeEach(inject(function($injector) {
            $q = $injector.get('$q');
            $scope = $injector.get('$rootScope').$new();
            MockTimeout = jasmine.createSpy('MockTimeout');
            MockAuth = jasmine.createSpyObj('MockAuth', ['createAccount']);
<<<<<<< HEAD
            MockTranslate = jasmine.createSpyObj('MockTranslate', ['use']);

            var locals = {
                'Auth': MockAuth,
                '$translate': MockTranslate,
=======
            

            var locals = {
                'Auth': MockAuth,
>>>>>>> 533092147c410637b99bf57166ee237aec486555
                '$timeout': MockTimeout,
                '$scope': $scope,
            };
            createController = function() {
<<<<<<< HEAD
                $injector.get('$controller')('RegisterController', locals);
=======
                $injector.get('$controller')('RegisterController as vm', locals);
>>>>>>> 533092147c410637b99bf57166ee237aec486555
            };
        }));

        it('should ensure the two passwords entered match', function() {
            // given
            createController();
<<<<<<< HEAD
            $scope.registerAccount.password = 'password';
            $scope.confirmPassword = 'non-matching';
            // when
            $scope.register();
            // then
            expect($scope.doNotMatch).toEqual('ERROR');
=======
            $scope.vm.registerAccount.password = 'password';
            $scope.vm.confirmPassword = 'non-matching';
            // when
            $scope.vm.register();
            // then
            expect($scope.vm.doNotMatch).toEqual('ERROR');
>>>>>>> 533092147c410637b99bf57166ee237aec486555
        });

        it('should update success to OK after creating an account', function() {
            // given
<<<<<<< HEAD
            MockTranslate.use.and.returnValue('en');
            MockAuth.createAccount.and.returnValue($q.resolve());
            createController();
            $scope.registerAccount.password = $scope.confirmPassword = 'password';
            // when
            $scope.$apply($scope.register); // $q promises require an $apply
=======
            
            MockAuth.createAccount.and.returnValue($q.resolve());
            createController();
            $scope.vm.registerAccount.password = $scope.vm.confirmPassword = 'password';
            // when
            $scope.$apply($scope.vm.register); // $q promises require an $apply
>>>>>>> 533092147c410637b99bf57166ee237aec486555
            // then
            expect(MockAuth.createAccount).toHaveBeenCalledWith({
                password: 'password',
                langKey: 'en'
            });
<<<<<<< HEAD
            expect($scope.success).toEqual('OK');
            expect($scope.registerAccount.langKey).toEqual('en');
            expect(MockTranslate.use).toHaveBeenCalled();
            expect($scope.errorUserExists).toBeNull();
            expect($scope.errorEmailExists).toBeNull();
            expect($scope.error).toBeNull();
=======
            expect($scope.vm.success).toEqual('OK');
            expect($scope.vm.registerAccount.langKey).toEqual('en');
            
            expect($scope.vm.errorUserExists).toBeNull();
            expect($scope.vm.errorEmailExists).toBeNull();
            expect($scope.vm.error).toBeNull();
>>>>>>> 533092147c410637b99bf57166ee237aec486555
        });

        it('should notify of user existence upon 400/login already in use', function() {
            // given
            MockAuth.createAccount.and.returnValue($q.reject({
                status: 400,
                data: 'login already in use'
            }));
            createController();
<<<<<<< HEAD
            $scope.registerAccount.password = $scope.confirmPassword = 'password';
            // when
            $scope.$apply($scope.register); // $q promises require an $apply
            // then
            expect($scope.errorUserExists).toEqual('ERROR');
            expect($scope.errorEmailExists).toBeNull();
            expect($scope.error).toBeNull();
=======
            $scope.vm.registerAccount.password = $scope.vm.confirmPassword = 'password';
            // when
            $scope.$apply($scope.vm.register); // $q promises require an $apply
            // then
            expect($scope.vm.errorUserExists).toEqual('ERROR');
            expect($scope.vm.errorEmailExists).toBeNull();
            expect($scope.vm.error).toBeNull();
>>>>>>> 533092147c410637b99bf57166ee237aec486555
        });

        it('should notify of email existence upon 400/e-mail address already in use', function() {
            // given
            MockAuth.createAccount.and.returnValue($q.reject({
                status: 400,
                data: 'e-mail address already in use'
            }));
            createController();
<<<<<<< HEAD
            $scope.registerAccount.password = $scope.confirmPassword = 'password';
            // when
            $scope.$apply($scope.register); // $q promises require an $apply
            // then
            expect($scope.errorEmailExists).toEqual('ERROR');
            expect($scope.errorUserExists).toBeNull();
            expect($scope.error).toBeNull();
=======
            $scope.vm.registerAccount.password = $scope.vm.confirmPassword = 'password';
            // when
            $scope.$apply($scope.vm.register); // $q promises require an $apply
            // then
            expect($scope.vm.errorEmailExists).toEqual('ERROR');
            expect($scope.vm.errorUserExists).toBeNull();
            expect($scope.vm.error).toBeNull();
>>>>>>> 533092147c410637b99bf57166ee237aec486555
        });

        it('should notify of generic error', function() {
            // given
            MockAuth.createAccount.and.returnValue($q.reject({
                status: 503
            }));
            createController();
<<<<<<< HEAD
            $scope.registerAccount.password = $scope.confirmPassword = 'password';
            // when
            $scope.$apply($scope.register); // $q promises require an $apply
            // then
            expect($scope.errorUserExists).toBeNull();
            expect($scope.errorEmailExists).toBeNull();
            expect($scope.error).toEqual('ERROR');
=======
            $scope.vm.registerAccount.password = $scope.vm.confirmPassword = 'password';
            // when
            $scope.$apply($scope.vm.register); // $q promises require an $apply
            // then
            expect($scope.vm.errorUserExists).toBeNull();
            expect($scope.vm.errorEmailExists).toBeNull();
            expect($scope.vm.error).toEqual('ERROR');
>>>>>>> 533092147c410637b99bf57166ee237aec486555
        });

    });
});
