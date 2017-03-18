/*!
{
  "name": "Webp Alpha",
  "async": true,
  "property": "webpalpha",
  "aliases": ["webp-alpha"],
  "tags": ["image"],
  "authors": ["Krister Kari", "Rich Bradshaw", "Ryan Seddon", "Paul Irish"],
  "notes": [{
    "name": "WebP Info",
<<<<<<< HEAD
    "href": "http://code.google.com/speed/webp/"
=======
    "href": "https://developers.google.com/speed/webp/"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  },{
    "name": "Article about WebP support on Android browsers",
    "href": "http://www.wope-framework.com/en/2013/06/24/webp-support-on-android-browsers/"
  },{
    "name": "Chromium WebP announcement",
<<<<<<< HEAD
    "href": "http://blog.chromium.org/2011/11/lossless-and-transparency-encoding-in.html?m=1"
=======
    "href": "https://blog.chromium.org/2011/11/lossless-and-transparency-encoding-in.html?m=1"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  }]
}
!*/
/* DOC
Tests for transparent webp support.
*/
define(['Modernizr', 'addTest'], function(Modernizr, addTest) {
  Modernizr.addAsyncTest(function() {
    var image = new Image();

    image.onerror = function() {
      addTest('webpalpha', false, {aliases: ['webp-alpha']});
    };

    image.onload = function() {
      addTest('webpalpha', image.width == 1, {aliases: ['webp-alpha']});
    };

    image.src = 'data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==';
  });
});
