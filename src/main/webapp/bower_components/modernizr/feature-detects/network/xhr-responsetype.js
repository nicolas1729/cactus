/*!
{
  "name": "XHR responseType",
  "property": "xhrresponsetype",
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
Tests for XMLHttpRequest xhr.responseType.
*/
define(['Modernizr'], function(Modernizr) {
  Modernizr.addTest('xhrresponsetype', (function() {
    if (typeof XMLHttpRequest == 'undefined') {
      return false;
    }
    var xhr = new XMLHttpRequest();
    xhr.open('get', '/', true);
    return 'response' in xhr;
  }()));
});
