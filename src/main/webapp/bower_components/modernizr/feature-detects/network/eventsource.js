/*!
{
  "name": "Server Sent Events",
  "property": "eventsource",
  "tags": ["network"],
  "builderAliases": ["network_eventsource"],
  "notes": [{
<<<<<<< HEAD
    "name": "W3 Spec",
    "href": "http://dev.w3.org/html5/eventsource/"
=======
    "name": "WHATWG Spec",
    "href": "https://html.spec.whatwg.org/multipage/comms.html#server-sent-events"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  }]
}
!*/
/* DOC
Tests for server sent events aka eventsource.
*/
define(['Modernizr'], function(Modernizr) {
  Modernizr.addTest('eventsource', 'EventSource' in window);
});
