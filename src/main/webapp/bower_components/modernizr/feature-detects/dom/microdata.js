/*!
{
  "name": "microdata",
  "property": "microdata",
  "tags": ["dom"],
  "builderAliases": ["dom_microdata"],
  "notes": [{
    "name": "W3 Spec",
<<<<<<< HEAD
    "href": "http://www.w3.org/TR/html5/microdata.html"
=======
    "href": "https://www.w3.org/TR/microdata/"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  }]
}
!*/
define(['Modernizr'], function(Modernizr) {
  Modernizr.addTest('microdata', 'getItems' in document);
});
