/*!
{
  "name": "ES6 String",
  "property": "es6string",
  "notes": [{
    "name": "unofficial ECMAScript 6 draft specification",
<<<<<<< HEAD
    "href": "http://people.mozilla.org/~jorendorff/es6-draft.html"
=======
    "href": "https://people.mozilla.org/~jorendorff/es6-draft.html"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  }],
  "polyfills": ["es6shim"],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "warnings": ["ECMAScript 6 is still a only a draft, so this detect may not match the final specification or implementations."],
  "tags": ["es6"]
}
!*/
/* DOC
Check if browser implements ECMAScript 6 String per specification.
*/
define(['Modernizr'], function(Modernizr) {
  Modernizr.addTest('es6string', !!(String.fromCodePoint &&
    String.raw &&
    String.prototype.codePointAt &&
    String.prototype.repeat &&
    String.prototype.startsWith &&
    String.prototype.endsWith &&
    String.prototype.contains));
});
