/*!
{
  "name": "File API",
  "property": "filereader",
  "caniuse": "fileapi",
  "notes": [{
    "name": "W3C Working Draft",
<<<<<<< HEAD
    "href": "http://www.w3.org/TR/FileAPI/"
=======
    "href": "https://www.w3.org/TR/FileAPI/"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  }],
  "tags": ["file"],
  "builderAliases": ["file_api"],
  "knownBugs": ["Will fail in Safari 5 due to its lack of support for the standards defined FileReader object"]
}
!*/
/* DOC
`filereader` tests for the File API specification

Tests for objects specific to the File API W3C specification without
being redundant (don't bother testing for Blob since it is assumed
to be the File object's prototype.)
*/
define(['Modernizr'], function(Modernizr) {
  Modernizr.addTest('filereader', !!(window.File && window.FileList && window.FileReader));
});
