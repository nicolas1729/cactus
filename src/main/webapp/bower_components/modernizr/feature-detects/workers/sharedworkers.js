/*!
{
  "name": "Shared Workers",
  "property": "sharedworkers",
  "caniuse" : "sharedworkers",
  "tags": ["performance", "workers"],
  "builderAliases": ["workers_sharedworkers"],
  "notes": [{
    "name": "W3C Reference",
<<<<<<< HEAD
    "href": "http://www.w3.org/TR/workers/"
=======
    "href": "https://www.w3.org/TR/workers/"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  }]
}
!*/
/* DOC
Detects support for the `SharedWorker` API from the Web Workers spec.
*/
define(['Modernizr'], function(Modernizr) {
  Modernizr.addTest('sharedworkers', 'SharedWorker' in window);
});
