/*!
{
  "name": "Animated PNG",
  "async": true,
  "property": "apng",
  "tags": ["image"],
  "builderAliases": ["img_apng"],
  "notes": [{
    "name": "Wikipedia Article",
<<<<<<< HEAD
    "href": "http://en.wikipedia.org/wiki/APNG"
=======
    "href": "https://en.wikipedia.org/wiki/APNG"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  }]
}
!*/
/* DOC
Test for animated png support.
*/
define(['Modernizr', 'createElement', 'addTest', 'test/canvas'], function(Modernizr, createElement, addTest) {
  Modernizr.addAsyncTest(function() {
    if (!Modernizr.canvas) {
      return false;
    }

    var image = new Image();
    var canvas = createElement('canvas');
    var ctx = canvas.getContext('2d');

    image.onload = function() {
      addTest('apng', function() {
        if (typeof canvas.getContext == 'undefined') {
          return false;
        }
        else {
          ctx.drawImage(image, 0, 0);
          return ctx.getImageData(0, 0, 1, 1).data[3] === 0;
        }
      });
    };

    image.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACGFjVEwAAAABAAAAAcMq2TYAAAANSURBVAiZY2BgYPgPAAEEAQB9ssjfAAAAGmZjVEwAAAAAAAAAAQAAAAEAAAAAAAAAAAD6A+gBAbNU+2sAAAARZmRBVAAAAAEImWNgYGBgAAAABQAB6MzFdgAAAABJRU5ErkJggg==';
  });
});
