/*!
{
  "name": "Flexbox (legacy)",
  "property": "flexboxlegacy",
  "tags": ["css"],
  "polyfills": ["flexie"],
  "notes": [{
    "name": "The _old_ flexbox",
<<<<<<< HEAD
    "href": "http://www.w3.org/TR/2009/WD-css3-flexbox-20090723/"
=======
    "href": "https://www.w3.org/TR/2009/WD-css3-flexbox-20090723/"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  }]
}
!*/
define(['Modernizr', 'testAllProps'], function(Modernizr, testAllProps) {
  Modernizr.addTest('flexboxlegacy', testAllProps('boxDirection', 'reverse', true));
});
