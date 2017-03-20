/*!
{
  "name": "Vibration API",
  "property": "vibrate",
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en/DOM/window.navigator.mozVibrate"
  },{
    "name": "W3C spec",
<<<<<<< HEAD
    "href": "http://www.w3.org/TR/vibration/"
=======
    "href": "https://www.w3.org/TR/vibration/"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  }]
}
!*/
/* DOC
Detects support for the API that provides access to the vibration mechanism of the hosting device, to provide tactile feedback.
*/
define(['Modernizr', 'prefixed'], function(Modernizr, prefixed) {
  Modernizr.addTest('vibrate', !!prefixed('vibrate', navigator));
});
