/*!
{
  "name": "CSS Background Clip Text",
  "property": "backgroundcliptext",
  "authors": ["ausi"],
  "tags": ["css"],
  "notes": [
    {
      "name": "CSS Tricks Article",
<<<<<<< HEAD
      "href": "http://css-tricks.com/image-under-text/"
    },
    {
      "name": "MDN Docs",
      "href": "http://developer.mozilla.org/en/CSS/background-clip"
    },
    {
      "name": "Related Github Issue",
      "href": "http://github.com/Modernizr/Modernizr/issues/199"
=======
      "href": "https://css-tricks.com/image-under-text/"
    },
    {
      "name": "MDN Docs",
      "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip"
    },
    {
      "name": "Related Github Issue",
      "href": "https://github.com/Modernizr/Modernizr/issues/199"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
    }
  ]
}
!*/
/* DOC
Detects the ability to control specifies whether or not an element's background
extends beyond its border in CSS
*/
define(['Modernizr', 'testAllProps'], function(Modernizr, testAllProps) {
  Modernizr.addTest('backgroundcliptext', function() {
    return testAllProps('backgroundClip', 'text');
  });
});
