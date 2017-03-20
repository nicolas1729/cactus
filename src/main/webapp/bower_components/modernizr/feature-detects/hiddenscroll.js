/*!
{
  "name": "Hidden Scrollbar",
  "property": "hiddenscroll",
  "authors": ["Oleg Korsunsky"],
  "tags": ["overlay"],
  "notes": [{
    "name": "Overlay Scrollbar description",
    "href": "https://developer.apple.com/library/mac/releasenotes/MacOSX/WhatsNewInOSX/Articles/MacOSX10_7.html#//apple_ref/doc/uid/TP40010355-SW39"
  },{
    "name": "Video example of overlay scrollbars",
<<<<<<< HEAD
    "href": "http://gfycat.com/FoolishMeaslyAtlanticsharpnosepuffer"
=======
    "href": "https://gfycat.com/FoolishMeaslyAtlanticsharpnosepuffer"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  }]
}
!*/
/* DOC
Detects overlay scrollbars (when scrollbars on overflowed blocks are visible). This is found most commonly on mobile and OS X.
*/
define(['Modernizr', 'testStyles'], function(Modernizr, testStyles) {
  Modernizr.addTest('hiddenscroll', function() {
    return testStyles('#modernizr {width:100px;height:100px;overflow:scroll}', function(elem) {
      return elem.offsetWidth === elem.clientWidth;
    });
  });
});
