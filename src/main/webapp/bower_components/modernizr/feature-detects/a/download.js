/*!
{
  "name": "a[download] Attribute",
  "property": "adownload",
  "caniuse" : "download",
  "tags": ["media", "attribute"],
  "builderAliases": ["a_download"],
  "notes": [{
    "name": "WhatWG Reference",
<<<<<<< HEAD
    "href": "http://developers.whatwg.org/links.html#downloading-resources"
=======
    "href": "https://developers.whatwg.org/links.html#downloading-resources"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  }]
}
!*/
/* DOC
When used on an `<a>`, this attribute signifies that the resource it points to should be downloaded by the browser rather than navigating to it.
*/
define(['Modernizr', 'createElement'], function(Modernizr, createElement) {
  Modernizr.addTest('adownload', !window.externalHost && 'download' in createElement('a'));
});
