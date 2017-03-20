/*!
{
  "name": "iframe[sandbox] Attribute",
  "property": "sandbox",
  "tags": ["iframe"],
  "builderAliases": ["iframe_sandbox"],
  "notes": [
  {
    "name": "WhatWG Spec",
<<<<<<< HEAD
    "href": "http://www.whatwg.org/specs/web-apps/current-work/multipage/the-iframe-element.html#attr-iframe-sandbox"
=======
    "href": "https://html.spec.whatwg.org/multipage/embedded-content.html#attr-iframe-sandbox"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  }],
  "knownBugs": [ "False-positive on Firefox < 29" ]
}
!*/
/* DOC
Test for `sandbox` attribute in iframes.
*/
define(['Modernizr', 'createElement'], function(Modernizr, createElement) {
  Modernizr.addTest('sandbox', 'sandbox' in createElement('iframe'));
});
