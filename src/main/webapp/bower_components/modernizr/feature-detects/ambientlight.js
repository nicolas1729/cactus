/*!
{
  "name": "Ambient Light Events",
  "property": "ambientlight",
  "notes": [{
    "name": "W3C Ambient Light Events",
<<<<<<< HEAD
    "href": "http://www.w3.org/TR/ambient-light/"
=======
    "href": "https://www.w3.org/TR/ambient-light/"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  }]
}
!*/
/* DOC
Detects support for the API that provides information about the ambient light levels, as detected by the device's light detector, in terms of lux units.
*/
define(['Modernizr', 'hasEvent'], function(Modernizr, hasEvent) {
  Modernizr.addTest('ambientlight', hasEvent('devicelight', window));
});
