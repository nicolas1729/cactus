/*!
{
  "name": "IE User Data API",
  "property": "userdata",
  "tags": ["storage"],
  "authors": ["@stereobooster"],
  "notes": [{
    "name": "MSDN Documentation",
<<<<<<< HEAD
    "href": "http://msdn.microsoft.com/en-us/library/ms531424(v=vs.85).aspx"
=======
    "href": "https://msdn.microsoft.com/en-us/library/ms531424.aspx"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  }]
}
!*/
/* DOC
Detects support for IE userData for persisting data, an API similar to localStorage but supported since IE5.
*/
define(['Modernizr', 'createElement'], function(Modernizr, createElement) {
  Modernizr.addTest('userdata', !!createElement('div').addBehavior);
});
