/*!
{
  "name": "Unknown Elements",
  "property": "unknownelements",
  "tags": ["elem"],
  "notes": [{
    "name": "The Story of the HTML5 Shiv",
<<<<<<< HEAD
    "href": "http://www.paulirish.com/2011/the-history-of-the-html5-shiv/"
=======
    "href": "https://www.paulirish.com/2011/the-history-of-the-html5-shiv/"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  }, {
    "name": "original implementation of detect code",
    "href": "https://github.com/aFarkas/html5shiv/blob/bf4fcc4/src/html5shiv.js#L36"
  }],
  "polyfills": ["html5shiv"],
  "authors": ["Ron Waldon (@jokeyrhyme)"]
}
!*/
/* DOC
Does the browser support HTML with non-standard / new elements?
*/
define(['Modernizr', 'createElement'], function(Modernizr, createElement) {
  Modernizr.addTest('unknownelements', function() {
    var a = createElement('a');
    a.innerHTML = '<xyz></xyz>';
    return a.childNodes.length === 1;
  });
});
