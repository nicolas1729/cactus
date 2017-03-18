/*!
{
  "name": "Background Size",
  "property": "backgroundsize",
  "tags": ["css"],
<<<<<<< HEAD
  "knownBugs": ["This will false positive in Opera Mini - http://github.com/Modernizr/Modernizr/issues/396"],
  "notes": [{
    "name": "Related Issue",
    "href": "http://github.com/Modernizr/Modernizr/issues/396"
=======
  "knownBugs": ["This will false positive in Opera Mini - https://github.com/Modernizr/Modernizr/issues/396"],
  "notes": [{
    "name": "Related Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/396"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  }]
}
!*/
define(['Modernizr', 'testAllProps'], function(Modernizr, testAllProps) {
  Modernizr.addTest('backgroundsize', testAllProps('backgroundSize', '100%', true));
});
