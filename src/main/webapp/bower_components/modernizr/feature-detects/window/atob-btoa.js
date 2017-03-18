/*!
{
  "name": "Base 64 encoding/decoding",
<<<<<<< HEAD
  "property": ["atob-btoa"],
=======
  "property": ["atobbtoa"],
  "builderAliases": ["atob-btoa"],
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  "caniuse" : "atob-btoa",
  "tags": ["atob", "base64", "WindowBase64", "btoa"],
  "authors": ["Christian Ulbrich"],
  "notes": [{
    "name": "WindowBase64",
<<<<<<< HEAD
    "href": "http://www.w3.org/TR/html5/webappapis.html#windowbase64"
=======
    "href": "https://www.w3.org/TR/html5/webappapis.html#windowbase64"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  }, {
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/atob"
  }],
  "polyfills": ["base64js"]
}
!*/
/* DOC

Detects support for WindowBase64 API (window.atob && window.btoa).

*/
define(['Modernizr'], function(Modernizr) {
<<<<<<< HEAD
  Modernizr.addTest('atob-btoa', 'atob' in window && 'btoa' in window);
=======
  Modernizr.addTest('atobbtoa', 'atob' in window && 'btoa' in window, {aliases: ['atob-btoa']});
>>>>>>> 533092147c410637b99bf57166ee237aec486555
});
