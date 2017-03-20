/*!
{
  "name": "XHR responseType='document'",
  "property": "xhrresponsetypedocument",
  "tags": ["network"],
  "notes": [{
    "name": "XMLHttpRequest Living Standard",
<<<<<<< HEAD
    "href": "http://xhr.spec.whatwg.org/#the-responsetype-attribute"
=======
    "href": "https://xhr.spec.whatwg.org/#the-responsetype-attribute"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  }]
}
!*/
/* DOC
Tests for XMLHttpRequest xhr.responseType='document'.
*/
define(['Modernizr', 'testXhrType'], function(Modernizr, testXhrType) {
  Modernizr.addTest('xhrresponsetypedocument', testXhrType('document'));
});
