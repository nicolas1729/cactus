/*!
{
  "name": "JSON",
  "property": "json",
  "caniuse": "json",
  "notes": [{
    "name": "MDN documentation",
<<<<<<< HEAD
    "href": "http://developer.mozilla.org/en/JSON"
=======
    "href": "https://developer.mozilla.org/en-US/docs/Glossary/JSON"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  }],
  "polyfills": ["json2"]
}
!*/
/* DOC
Detects native support for JSON handling functions.
*/
define(['Modernizr'], function(Modernizr) {
  // this will also succeed if you've loaded the JSON2.js polyfill ahead of time
  //   ... but that should be obvious. :)

  Modernizr.addTest('json', 'JSON' in window && 'parse' in JSON && 'stringify' in JSON);
});
