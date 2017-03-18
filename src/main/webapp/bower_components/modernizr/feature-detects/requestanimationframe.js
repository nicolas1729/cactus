/*!
{
  "name": "requestAnimationFrame",
  "property": "requestanimationframe",
  "aliases": ["raf"],
  "caniuse": "requestanimationframe",
  "tags": ["animation"],
  "authors": ["Addy Osmani"],
  "notes": [{
    "name": "W3C spec",
<<<<<<< HEAD
    "href": "http://www.w3.org/TR/animation-timing/"
=======
    "href": "https://www.w3.org/TR/animation-timing/"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  }],
  "polyfills": ["raf"]
}
!*/
/* DOC
Detects support for the `window.requestAnimationFrame` API, for offloading animation repainting to the browser for optimized performance.
*/
define(['Modernizr', 'prefixed'], function(Modernizr, prefixed) {
  Modernizr.addTest('requestanimationframe', !!prefixed('requestAnimationFrame', window), {aliases: ['raf']});
});
