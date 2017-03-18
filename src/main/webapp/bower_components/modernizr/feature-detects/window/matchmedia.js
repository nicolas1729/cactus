/*!
{
  "name": "matchMedia",
  "property": "matchmedia",
  "caniuse" : "matchmedia",
  "tags": ["matchmedia"],
  "authors": ["Alberto Elias"],
  "notes": [{
    "name": "W3C CSSOM View Module",
<<<<<<< HEAD
    "href": "http://dev.w3.org/csswg/cssom-view/#the-mediaquerylist-interface"
=======
    "href": "https://drafts.csswg.org/cssom-view/#the-mediaquerylist-interface"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  }, {
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/Window.matchMedia"
  }],
  "polyfills": ["matchmediajs"]
}
!*/
/* DOC

Detects support for matchMedia.

*/
define(['Modernizr', 'prefixed'], function(Modernizr, prefixed) {
  Modernizr.addTest('matchmedia', !!prefixed('matchMedia', window));
});
