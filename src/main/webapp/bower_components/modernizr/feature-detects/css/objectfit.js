/*!
{
  "name": "CSS Object Fit",
  "caniuse": "object-fit",
  "property": "objectfit",
  "tags": ["css"],
  "builderAliases": ["css_objectfit"],
  "notes": [{
    "name": "Opera Article on Object Fit",
<<<<<<< HEAD
    "href": "http://dev.opera.com/articles/view/css3-object-fit-object-position/"
=======
    "href": "https://dev.opera.com/articles/css3-object-fit-object-position/"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  }]
}
!*/
define(['Modernizr', 'prefixed'], function(Modernizr, prefixed) {
  Modernizr.addTest('objectfit', !!prefixed('objectFit'), {aliases: ['object-fit']});
});
