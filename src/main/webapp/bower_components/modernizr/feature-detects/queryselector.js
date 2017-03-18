/*!
{
  "name": "QuerySelector",
  "property": "queryselector",
  "caniuse": "queryselector",
  "tags": ["queryselector"],
  "authors": ["Andrew Betts (@triblondon)"],
  "notes": [{
    "name" : "W3C Selectors reference",
<<<<<<< HEAD
    "href": "http://www.w3.org/TR/selectors-api/#queryselectorall"
=======
    "href": "https://www.w3.org/TR/selectors-api/#queryselectorall"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  }],
  "polyfills": ["css-selector-engine"]
}
!*/
/* DOC
Detects support for querySelector.
*/
define(['Modernizr'], function(Modernizr) {
  Modernizr.addTest('queryselector', 'querySelector' in document && 'querySelectorAll' in document);
});
