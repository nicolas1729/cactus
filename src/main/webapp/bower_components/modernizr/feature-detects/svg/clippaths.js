/*!
{
  "name": "SVG clip paths",
  "property": "svgclippaths",
  "tags": ["svg"],
  "notes": [{
    "name": "Demo",
    "href": "http://srufaculty.sru.edu/david.dailey/svg/newstuff/clipPath4.svg"
  }]
}
!*/
/* DOC
Detects support for clip paths in SVG (only, not on HTML content).

<<<<<<< HEAD
See [this discussion](http://github.com/Modernizr/Modernizr/issues/213) regarding applying SVG clip paths to HTML content.
=======
See [this discussion](https://github.com/Modernizr/Modernizr/issues/213) regarding applying SVG clip paths to HTML content.
>>>>>>> 533092147c410637b99bf57166ee237aec486555
*/
define(['Modernizr', 'toStringFn'], function(Modernizr, toStringFn) {
  Modernizr.addTest('svgclippaths', function() {
    return !!document.createElementNS &&
      /SVGClipPath/.test(toStringFn.call(document.createElementNS('http://www.w3.org/2000/svg', 'clipPath')));
  });
});
