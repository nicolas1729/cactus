/*!
{
  "name": "Web Workers",
  "property": "webworkers",
  "caniuse" : "webworkers",
  "tags": ["performance", "workers"],
  "notes": [{
    "name": "W3C Reference",
<<<<<<< HEAD
    "href": "http://www.w3.org/TR/workers/"
=======
    "href": "https://www.w3.org/TR/workers/"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  }, {
    "name": "HTML5 Rocks article",
    "href": "http://www.html5rocks.com/en/tutorials/workers/basics/"
  }, {
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/Guide/Performance/Using_web_workers"
  }],
  "polyfills": ["fakeworker", "html5shims"]
}
!*/
/* DOC
Detects support for the basic `Worker` API from the Web Workers spec. Web Workers provide a simple means for web content to run scripts in background threads.
*/
define(['Modernizr'], function(Modernizr) {
  Modernizr.addTest('webworkers', 'Worker' in window);
});
