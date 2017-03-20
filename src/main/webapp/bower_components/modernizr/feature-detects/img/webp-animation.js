/*!
{
  "name": "Webp Animation",
  "async": true,
  "property": "webpanimation",
  "aliases": ["webp-animation"],
  "tags": ["image"],
  "authors": ["Krister Kari", "Rich Bradshaw", "Ryan Seddon", "Paul Irish"],
  "notes": [{
    "name": "WebP Info",
<<<<<<< HEAD
    "href": "http://code.google.com/speed/webp/"
  },{
    "name": "Chromium blog - Chrome 32 Beta: Animated WebP images and faster Chrome for Android touch input",
    "href": "http://blog.chromium.org/2013/11/chrome-32-beta-animated-webp-images-and.html"
=======
    "href": "https://developers.google.com/speed/webp/"
  },{
    "name": "Chromium blog - Chrome 32 Beta: Animated WebP images and faster Chrome for Android touch input",
    "href": "https://blog.chromium.org/2013/11/chrome-32-beta-animated-webp-images-and.html"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  }]
}
!*/
/* DOC
Tests for animated webp support.
*/
define(['Modernizr', 'addTest'], function(Modernizr, addTest) {
  Modernizr.addAsyncTest(function() {
    var image = new Image();

    image.onerror = function() {
      addTest('webpanimation', false, {aliases: ['webp-animation']});
    };

    image.onload = function() {
      addTest('webpanimation', image.width == 1, {aliases: ['webp-animation']});
    };

    image.src = 'data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA';
  });
});
