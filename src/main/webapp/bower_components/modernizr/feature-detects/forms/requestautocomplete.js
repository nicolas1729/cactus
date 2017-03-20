/*!
{
  "name": "form#requestAutocomplete()",
  "property": "requestautocomplete",
  "tags": ["form", "forms", "requestAutocomplete", "payments"],
  "notes": [{
    "name": "WHATWG proposed spec",
<<<<<<< HEAD
    "href": "http://wiki.whatwg.org/wiki/RequestAutocomplete"
=======
    "href": "https://wiki.whatwg.org/wiki/RequestAutocomplete"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  }]
}
!*/
/* DOC
When used with input[autocomplete] to annotate a form, form.requestAutocomplete() shows a dialog in Chrome that speeds up
checkout flows (payments specific for now).
*/
define(['Modernizr', 'createElement', 'prefixed'], function(Modernizr, createElement, prefixed) {
  Modernizr.addTest('requestautocomplete', !!prefixed('requestAutocomplete', createElement('form')));
});
