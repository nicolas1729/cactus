/*!
{
  "name": "JPEG XR (extended range)",
  "async": true,
  "aliases": ["jpeg-xr"],
  "property": "jpegxr",
  "tags": ["image"],
  "notes": [{
    "name": "Wikipedia Article",
<<<<<<< HEAD
    "href": "http://en.wikipedia.org/wiki/JPEG_XR"
=======
    "href": "https://en.wikipedia.org/wiki/JPEG_XR"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  }]
}
!*/
/* DOC
Test for JPEG XR support
*/
define(['Modernizr', 'addTest'], function(Modernizr, addTest) {

  Modernizr.addAsyncTest(function() {
    var image = new Image();

    image.onload = image.onerror = function() {
      addTest('jpegxr', image.width == 1, {aliases: ['jpeg-xr']});
    };

    image.src = 'data:image/vnd.ms-photo;base64,SUm8AQgAAAAFAAG8AQAQAAAASgAAAIC8BAABAAAAAQAAAIG8BAABAAAAAQAAAMC8BAABAAAAWgAAAMG8BAABAAAAHwAAAAAAAAAkw91vA07+S7GFPXd2jckNV01QSE9UTwAZAYBxAAAAABP/gAAEb/8AAQAAAQAAAA==';
  });
});
