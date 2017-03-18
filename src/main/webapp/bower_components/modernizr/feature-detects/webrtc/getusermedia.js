/*!
{
  "name": "getUserMedia",
  "property": "getusermedia",
  "caniuse": "stream",
  "tags": ["webrtc"],
  "authors": ["Eric Bidelman"],
  "notes": [{
    "name": "W3C Media Capture and Streams spec",
<<<<<<< HEAD
    "href": "http://www.w3.org/TR/mediacapture-streams/"
=======
    "href": "https://www.w3.org/TR/mediacapture-streams/"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  }],
  "polyfills": ["getusermedia"]
}
!*/
define(['Modernizr', 'prefixed'], function(Modernizr, prefixed) {
  Modernizr.addTest('getusermedia', !!prefixed('getUserMedia', navigator));
});
