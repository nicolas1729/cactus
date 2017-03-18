/*!
{
  "name": "will-change",
  "property": "willchange",
  "notes": [{
    "name": "Spec",
<<<<<<< HEAD
    "href": "http://tabatkins.github.io/specs/css-will-change/"
=======
    "href": "https://drafts.csswg.org/css-will-change/"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  }]
}
!*/
/* DOC
Detects support for the `will-change` css property, which formally signals to the
browser that an element will be animating.
*/
define(['Modernizr', 'docElement'], function(Modernizr, docElement) {
  Modernizr.addTest('willchange', 'willChange' in docElement.style);
});
