/*!
{
  "name": "RTC Data Channel",
  "property": "datachannel",
  "notes": [{
    "name": "HTML5 Rocks! Article",
    "href": "http://www.html5rocks.com/en/tutorials/webrtc/datachannels/"
  }]
}
!*/
/* DOC
Detect for the RTCDataChannel API that allows for transfer data directly from one peer to another
*/
define(['Modernizr', 'prefixed', 'domPrefixes', 'test/webrtc/peerconnection'], function(Modernizr, prefixed, domPrefixes) {

  Modernizr.addTest('datachannel', function() {
    if (!Modernizr.peerconnection) {
      return false;
    }
    for (var i = 0, l = domPrefixes.length; i < l; i++) {
<<<<<<< HEAD
      var peerConnectionConstructor = window[domPrefixes[i] + 'RTCPeerConnection'];

      if (peerConnectionConstructor) {
        var peerConnection = new peerConnectionConstructor({
=======
      var PeerConnectionConstructor = window[domPrefixes[i] + 'RTCPeerConnection'];

      if (PeerConnectionConstructor) {
        var peerConnection = new PeerConnectionConstructor({
>>>>>>> 533092147c410637b99bf57166ee237aec486555
          'iceServers': [{'url': 'stun:0'}]
        });

        return 'createDataChannel' in peerConnection;
      }

    }
    return false;
  });
});
