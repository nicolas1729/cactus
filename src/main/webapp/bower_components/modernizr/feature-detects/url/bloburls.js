/*!
{
  "name": "Blob URLs",
  "property": "bloburls",
  "caniuse": "bloburls",
  "notes": [{
    "name": "W3C Working Draft",
<<<<<<< HEAD
    "href": "http://www.w3.org/TR/FileAPI/#creating-revoking"
=======
    "href": "https://www.w3.org/TR/FileAPI/#creating-revoking"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  }],
  "tags": ["file", "url"],
  "authors": ["Ron Waldon (@jokeyrhyme)"]
}
!*/
/* DOC
Detects support for creating Blob URLs
*/
define(['Modernizr', 'prefixed'], function(Modernizr, prefixed) {
  var url = prefixed('URL', window, false);
  url = url && window[url];
  Modernizr.addTest('bloburls', url && 'revokeObjectURL' in url && 'createObjectURL' in url);
});
