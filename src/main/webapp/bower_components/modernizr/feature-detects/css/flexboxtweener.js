/*!
{
  "name": "Flexbox (tweener)",
  "property": "flexboxtweener",
  "tags": ["css"],
  "polyfills": ["flexie"],
  "notes": [{
    "name": "The _inbetween_ flexbox",
<<<<<<< HEAD
    "href": "http://www.w3.org/TR/2011/WD-css3-flexbox-20111129/"
=======
    "href": "https://www.w3.org/TR/2011/WD-css3-flexbox-20111129/"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  }],
  "warnings": ["This represents an old syntax, not the latest standard syntax."]
}
!*/
define(['Modernizr', 'testAllProps'], function(Modernizr, testAllProps) {
  Modernizr.addTest('flexboxtweener', testAllProps('flexAlign', 'end', true));
});
