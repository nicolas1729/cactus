/*!
{
  "name": "time Element",
  "property": "time",
  "tags": ["elem"],
  "builderAliases": ["elem_time"],
  "notes": [{
    "name": "WhatWG Spec",
<<<<<<< HEAD
    "href": "http://www.whatwg.org/specs/web-apps/current-work/multipage/text-level-semantics.html#the-time-element"
=======
    "href": "https://html.spec.whatwg.org/multipage/semantics.html#the-time-element"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  }]
}
!*/
define(['Modernizr', 'createElement'], function(Modernizr, createElement) {
  Modernizr.addTest('time', 'valueAsDate' in createElement('time'));
});
