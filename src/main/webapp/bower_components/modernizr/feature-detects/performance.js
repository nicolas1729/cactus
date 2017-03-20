/*!
{
  "name": "Navigation Timing API",
  "property": "performance",
  "caniuse": "nav-timing",
  "tags": ["performance"],
  "authors": ["Scott Murphy (@uxder)"],
  "notes": [{
    "name": "W3C Spec",
<<<<<<< HEAD
    "href": "http://www.w3.org/TR/navigation-timing/"
=======
    "href": "https://www.w3.org/TR/navigation-timing/"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  },{
    "name": "HTML5 Rocks article",
    "href": "http://www.html5rocks.com/en/tutorials/webperformance/basics/"
  }],
  "polyfills": ["perfnow"]
}
!*/
/* DOC
Detects support for the Navigation Timing API, for measuring browser and connection performance.
*/
define(['Modernizr', 'prefixed'], function(Modernizr, prefixed) {
  Modernizr.addTest('performance', !!prefixed('performance', window));
});
