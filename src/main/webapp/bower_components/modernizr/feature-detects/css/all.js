/*!
{
  "name": "cssall",
  "property": "cssall",
  "notes": [{
    "name": "Spec",
<<<<<<< HEAD
    "href": "http://dev.w3.org/csswg/css-cascade/#all-shorthand"
=======
    "href": "https://drafts.csswg.org/css-cascade/#all-shorthand"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  }]
}
!*/
/* DOC
Detects support for the `all` css property, which is a shorthand to reset all css properties (except direction and unicode-bidi) to their original value
*/

define(['Modernizr', 'docElement'], function(Modernizr, docElement) {
  Modernizr.addTest('cssall', 'all' in docElement.style);
});
