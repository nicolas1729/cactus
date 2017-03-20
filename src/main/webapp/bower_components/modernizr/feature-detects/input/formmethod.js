/*!
{
  "name": "input formmethod",
  "property": "inputformmethod",
  "notes": [{
    "name": "WHATWG Spec",
<<<<<<< HEAD
    "href": "http://www.whatwg.org/specs/web-apps/current-work/multipage/association-of-controls-and-forms.html#attr-fs-formmethod"
  }, {
    "name": "Wufoo demo",
    "href": "http://www.wufoo.com/html5/attributes/14-formmethod.html"
=======
    "href": "https://html.spec.whatwg.org/multipage/forms.html#attr-fs-formmethod"
  }, {
    "name": "Wufoo demo",
    "href": "https://www.wufoo.com/html5/attributes/14-formmethod.html"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  }],
  "polyfills": [
    "webshims"
  ]
}
!*/
/* DOC
Detect support for the formmethod attribute on form inputs
*/
define(['Modernizr', 'createElement'], function(Modernizr, createElement) {
  Modernizr.addTest('inputformmethod', !!('formMethod' in createElement('input')));
});
