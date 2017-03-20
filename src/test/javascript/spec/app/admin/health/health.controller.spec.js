'use strict';

describe('Controller Tests', function () {

<<<<<<< HEAD
    describe('HealthController', function () {
        var $scope; // actual implementations
        var createController; // local utility functions

        beforeEach(inject(function ($injector) {
            $scope = $injector.get('$rootScope').$new();
=======
    describe('JhiHealthCheckController', function () {
        var $scope, jhiHealthService; // actual implementations
        var createController; // local utility functions

        beforeEach(inject(function ($injector, JhiHealthService) {
            $scope = $injector.get('$rootScope').$new();
            jhiHealthService = JhiHealthService;
>>>>>>> 533092147c410637b99bf57166ee237aec486555
            var locals = {
                '$scope': $scope
            };
            createController = function() {
<<<<<<< HEAD
                $injector.get('$controller')('HealthController', locals);
=======
                $injector.get('$controller')('JhiHealthCheckController as vm', locals);
>>>>>>> 533092147c410637b99bf57166ee237aec486555
            };
            createController();
        }));

<<<<<<< HEAD
        describe('isHealthObject and hasSubSystem', function () {
            it('should verify empty object is not a health property leaf', function () {
                expect($scope.isHealthObject({})).toBe(false);
                expect($scope.hasSubSystem({})).toBe(false);
            });

            it('should verify object with property status and no subsystems is a health property leaf', function () {
                var healthObject = {
                    'status': 'UP'
                };
                expect($scope.isHealthObject(healthObject)).toBe(true);
                expect($scope.hasSubSystem(healthObject)).toBe(false);
            });

            it('should verify that object property status and unrecognized objects is a health property leaf', function () {
                var healthObject = {
                    'status': 'UP',
                    'subsystem': {
                        'hello': 'UP'
                    }
                };
                expect($scope.isHealthObject(healthObject)).toBe(true);
                expect($scope.hasSubSystem(healthObject)).toBe(false);
            });

            it('should verify object with property status but with subsystems is NOT a health property leaf', function () {
                var healthObject = {
                    'status': 'UP',
                    'subsystem': {
                        'status': 'UP'
                    }
                };
                expect($scope.isHealthObject(healthObject)).toBe(true);
                expect($scope.hasSubSystem(healthObject)).toBe(true);
            });

=======
        describe('baseName and subSystemName', function () {
            it('should return the basename when it has no sub system', function () {
                expect($scope.vm.baseName('base')).toBe('base');
            });

            it('should return the basename when it has sub systems', function () {
                expect($scope.vm.baseName('base.subsystem.system')).toBe('base');
            });

            it('should return the sub system name', function () {
                expect($scope.vm.subSystemName('subsystem')).toBe('');
            });

            it('should return the subsystem when it has multiple keys', function () {
                expect($scope.vm.subSystemName('subsystem.subsystem.system')).toBe(' - subsystem.system');
            });


>>>>>>> 533092147c410637b99bf57166ee237aec486555
        });

        describe('transformHealthData', function () {
            it('should flatten empty health data', function () {
                var data = {};
                var expected = [];
<<<<<<< HEAD
                expect($scope.transformHealthData(data)).toEqual(expected);
=======
                expect(jhiHealthService.transformHealthData(data)).toEqual(expected);
>>>>>>> 533092147c410637b99bf57166ee237aec486555
            });

            it('should flatten health data with no subsystems', function () {
                var data = {
                    'status': 'UP',
                    'db': {
                        'status': 'UP',
                        'database': 'H2',
                        'hello': '1'
                    },
                    'mail': {
                        'status': 'UP',
                        'error': 'mail.a.b.c'
                    }
                };
                var expected = [
                    {
                        'name': 'db',
                        'status': 'UP',
                        'details': {
                            'database': 'H2',
                            'hello': '1'
                        }
                    },
                    {
                        'name': 'mail',
                        'status': 'UP',
                        'error': 'mail.a.b.c'
                    }
                ];
<<<<<<< HEAD
                expect($scope.transformHealthData(data)).toEqual(expected);
=======
                expect(jhiHealthService.transformHealthData(data)).toEqual(expected);
>>>>>>> 533092147c410637b99bf57166ee237aec486555
            });

            it('should flatten health data with subsystems at level 1, main system has no additional information', function () {
                var data = {
                    'status': 'UP',
                    'db': {
                        'status': 'UP',
                        'database': 'H2',
                        'hello': '1'
                    },
                    'mail': {
                        'status': 'UP',
                        'error': 'mail.a.b.c'
                    },
                    'system': {
                        'status': 'DOWN',
                        'subsystem1': {
                            'status': 'UP',
                            'property1': 'system.subsystem1.property1'
                        },
                        'subsystem2': {
                            'status': 'DOWN',
                            'error': 'system.subsystem1.error',
                            'property2': 'system.subsystem2.property2'
                        }
                    }
                };
                var expected = [
                    {
                        'name': 'db',
                        'status': 'UP',
                        'details': {
                            'database': 'H2',
                            'hello': '1'
                        }
                    },
                    {
                        'name': 'mail',
                        'status': 'UP',
                        'error': 'mail.a.b.c'
                    },
                    {
                        'name': 'system.subsystem1',
                        'status': 'UP',
                        'details': {
                            'property1': 'system.subsystem1.property1'
                        }
                    },
                    {
                        'name': 'system.subsystem2',
                        'status': 'DOWN',
                        'error': 'system.subsystem1.error',
                        'details': {
                            'property2': 'system.subsystem2.property2'
                        }
                    }
                ];
<<<<<<< HEAD
                expect($scope.transformHealthData(data)).toEqual(expected);
=======
                expect(jhiHealthService.transformHealthData(data)).toEqual(expected);
>>>>>>> 533092147c410637b99bf57166ee237aec486555
            });

            it('should flatten health data with subsystems at level 1, main system has additional information', function () {
                var data = {
                    'status': 'UP',
                    'db': {
                        'status': 'UP',
                        'database': 'H2',
                        'hello': '1'
                    },
                    'mail': {
                        'status': 'UP',
                        'error': 'mail.a.b.c'
                    },
                    'system': {
                        'status': 'DOWN',
                        'property1': 'system.property1',
                        'subsystem1': {
                            'status': 'UP',
                            'property1': 'system.subsystem1.property1'
                        },
                        'subsystem2': {
                            'status': 'DOWN',
                            'error': 'system.subsystem1.error',
                            'property2': 'system.subsystem2.property2'
                        }
                    }
                };
                var expected = [
                    {
                        'name': 'db',
                        'status': 'UP',
                        'details': {
                            'database': 'H2',
                            'hello': '1'
                        }
                    },
                    {
                        'name': 'mail',
                        'status': 'UP',
                        'error': 'mail.a.b.c'
                    },
                    {
                        'name': 'system',
                        'status': 'DOWN',
                        'details': {
                            'property1': 'system.property1'
                        }
                    },
                    {
                        'name': 'system.subsystem1',
                        'status': 'UP',
                        'details': {
                            'property1': 'system.subsystem1.property1'
                        }
                    },
                    {
                        'name': 'system.subsystem2',
                        'status': 'DOWN',
                        'error': 'system.subsystem1.error',
                        'details': {
                            'property2': 'system.subsystem2.property2'
                        }
                    }
                ];
<<<<<<< HEAD
                expect($scope.transformHealthData(data)).toEqual(expected);
=======
                expect(jhiHealthService.transformHealthData(data)).toEqual(expected);
>>>>>>> 533092147c410637b99bf57166ee237aec486555
            });

            it('should flatten health data with subsystems at level 1, main system has additional error', function () {
                var data = {
                    'status': 'UP',
                    'db': {
                        'status': 'UP',
                        'database': 'H2',
                        'hello': '1'
                    },
                    'mail': {
                        'status': 'UP',
                        'error': 'mail.a.b.c'
                    },
                    'system': {
                        'status': 'DOWN',
                        'error': 'show me',
                        'subsystem1': {
                            'status': 'UP',
                            'property1': 'system.subsystem1.property1'
                        },
                        'subsystem2': {
                            'status': 'DOWN',
                            'error': 'system.subsystem1.error',
                            'property2': 'system.subsystem2.property2'
                        }
                    }
                };
                var expected = [
                    {
                        'name': 'db',
                        'status': 'UP',
                        'details': {
                            'database': 'H2',
                            'hello': '1'
                        }
                    },
                    {
                        'name': 'mail',
                        'status': 'UP',
                        'error': 'mail.a.b.c'
                    },
                    {
                        'name': 'system',
                        'status': 'DOWN',
                        'error': 'show me'
                    },
                    {
                        'name': 'system.subsystem1',
                        'status': 'UP',
                        'details': {
                            'property1': 'system.subsystem1.property1'
                        }
                    },
                    {
                        'name': 'system.subsystem2',
                        'status': 'DOWN',
                        'error': 'system.subsystem1.error',
                        'details': {
                            'property2': 'system.subsystem2.property2'
                        }
                    }
                ];
<<<<<<< HEAD
                expect($scope.transformHealthData(data)).toEqual(expected);
            });
        });

        describe('getModuleName(path, name)', function () {
            it('should show both path and name if defined', function () {
                expect($scope.getModuleName('path', 'name')).toEqual('path' + $scope.separator + 'name');
            });

            it('should show only path if name is not defined', function () {
                expect($scope.getModuleName('path')).toEqual('path');
                expect($scope.getModuleName('path', '')).toEqual('path');
                expect($scope.getModuleName('path', null)).toEqual('path');
            });

            it('should show only name if path is not defined', function () {
                expect($scope.getModuleName(null, 'name')).toEqual('name');
                expect($scope.getModuleName('', 'name')).toEqual('name');
            });

            it('should show empty string if neither name nor path is defined', function () {
                expect($scope.getModuleName()).toEqual('');
            });
        });
=======
                expect(jhiHealthService.transformHealthData(data)).toEqual(expected);
            });
        });

>>>>>>> 533092147c410637b99bf57166ee237aec486555
    });
});
