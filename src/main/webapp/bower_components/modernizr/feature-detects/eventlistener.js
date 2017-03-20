/*!
{
  "name": "Event Listener",
  "property": "eventlistener",
  "authors": ["Andrew Betts (@triblondon)"],
  "notes": [{
    "name": "W3C Spec",
<<<<<<< HEAD
    "href": "http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-Registration-interfaces"
=======
    "href": "https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-Registration-interfaces"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  }],
  "polyfills": ["eventlistener"]
}
!*/
/* DOC
Detects native support for addEventListener
*/
define(['Modernizr'], function(Modernizr) {
  Modernizr.addTest('eventlistener', 'addEventListener' in window);
});
