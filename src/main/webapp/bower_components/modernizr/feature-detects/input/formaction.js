/*!
{
  "name": "input formaction",
  "property": "inputformaction",
  "aliases": ["input-formaction"],
  "notes": [{
    "name": "WHATWG Spec",
<<<<<<< HEAD
    "href": "http://www.whatwg.org/specs/web-apps/current-work/multipage/association-of-controls-and-forms.html#attr-fs-formaction"
  }, {
    "name": "Wufoo demo",
    "href": "http://www.wufoo.com/html5/attributes/13-formaction.html"
=======
    "href": "https://html.spec.whatwg.org/multipage/forms.html#attr-fs-formaction"
  }, {
    "name": "Wufoo demo",
    "href": "https://www.wufoo.com/html5/attributes/13-formaction.html"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  }],
  "polyfills": [
    "webshims"
  ]
}
!*/
/* DOC
Detect support for the formaction attribute on form inputs
*/
define(['Modernizr', 'createElement'], function(Modernizr, createElement) {
  Modernizr.addTest('inputformaction', !!('formAction' in createElement('input')), {aliases: ['input-formaction']});
});
