/*!
{
  "name": "input[capture] Attribute",
  "property": "capture",
  "tags": ["video", "image", "audio", "media", "attribute"],
  "notes": [{
    "name": "W3C draft: HTML Media Capture",
<<<<<<< HEAD
    "href": "http://www.w3.org/TR/html-media-capture/"
=======
    "href": "https://www.w3.org/TR/html-media-capture/"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  }]
}
!*/
/* DOC
When used on an `<input>`, this attribute signifies that the resource it takes should be generated via device's camera, camcorder, sound recorder.
*/
define(['Modernizr', 'createElement'], function(Modernizr, createElement) {
  // testing for capture attribute in inputs
  Modernizr.addTest('capture', ('capture' in createElement('input')));
});
