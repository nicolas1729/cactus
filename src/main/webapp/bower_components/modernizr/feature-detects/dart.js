/*!
{
  "name": "Dart",
  "property": "dart",
  "authors": ["Theodoor van Donge"],
  "notes": [{
    "name": "Language website",
<<<<<<< HEAD
    "href": "http://www.dartlang.org/"
=======
    "href": "https://www.dartlang.org/"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  }]
}
!*/
/* DOC
Detects native support for the Dart programming language.
*/
define(['Modernizr', 'prefixed'], function(Modernizr, prefixed) {
  Modernizr.addTest('dart', !!prefixed('startDart', navigator));
});
