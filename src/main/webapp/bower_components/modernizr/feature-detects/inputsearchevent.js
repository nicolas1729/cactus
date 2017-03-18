/*!
{
  "name": "input[search] search event",
  "property": "search",
  "tags": ["input","search"],
  "authors": ["Calvin Webster"],
  "notes": [{
    "name": "Wufoo demo",
<<<<<<< HEAD
    "href": "http://www.wufoo.com/html5/types/5-search.html?"
  }, {
    "name": "CSS Tricks",
    "href": "http://css-tricks.com/webkit-html5-search-inputs/"
=======
    "href": "https://www.wufoo.com/html5/types/5-search.html?"
  }, {
    "name": "CSS Tricks",
    "href": "https://css-tricks.com/webkit-html5-search-inputs/"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  }]
}
!*/
/* DOC
There is a custom `search` event implemented in webkit browsers when using an `input[search]` element.
*/
define(['Modernizr', 'hasEvent'], function(Modernizr, hasEvent) {
  Modernizr.addTest('inputsearchevent',  hasEvent('search'));
});
