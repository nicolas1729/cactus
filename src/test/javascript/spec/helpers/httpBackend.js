function mockApiAccountCall() {
    inject(function($httpBackend) {
        $httpBackend.whenGET(/api\/account.*/).respond({});
    });
}

function mockI18nCalls() {
    inject(function($httpBackend) {
        $httpBackend.whenGET(/i18n\/.*\/.+\.json/).respond({});
    });
}

function mockScriptsCalls() {
    inject(function($httpBackend) {
<<<<<<< HEAD
        $httpBackend.whenGET(/scripts\/.*/).respond({});
=======
        $httpBackend.whenGET(/app\/.*/).respond({});
>>>>>>> 533092147c410637b99bf57166ee237aec486555
    });
}
