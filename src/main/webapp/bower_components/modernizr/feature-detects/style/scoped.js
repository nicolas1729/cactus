/*!
{
  "name": "style[scoped]",
  "property": "stylescoped",
  "caniuse": "style-scoped",
  "tags": ["dom"],
  "builderAliases": ["style_scoped"],
  "authors": ["Cătălin Mariș"],
  "notes": [{
    "name": "WHATWG Specification",
<<<<<<< HEAD
    "href": "http://www.whatwg.org/specs/web-apps/current-work/multipage/semantics.html#attr-style-scoped"
=======
    "href": "https://html.spec.whatwg.org/multipage/semantics.html#attr-style-scoped"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  }],
  "polyfills": ["scoped-styles"]
}
!*/
/* DOC
Support for the `scoped` attribute of the `<style>` element.
*/
define(['Modernizr', 'createElement'], function(Modernizr, createElement) {
  Modernizr.addTest('stylescoped', 'scoped' in createElement('style'));
});
