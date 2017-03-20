/*!
{
  "name": "RTC Peer Connection",
  "property": "peerconnection",
  "tags": ["webrtc"],
  "authors": ["Ankur Oberoi"],
  "notes": [{
    "name": "W3C Web RTC spec",
<<<<<<< HEAD
    "href": "http://www.w3.org/TR/webrtc/"
=======
    "href": "https://www.w3.org/TR/webrtc/"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  }]
}
!*/
define(['Modernizr', 'prefixed'], function(Modernizr, prefixed) {
  Modernizr.addTest('peerconnection', !!prefixed('RTCPeerConnection', window));
});
