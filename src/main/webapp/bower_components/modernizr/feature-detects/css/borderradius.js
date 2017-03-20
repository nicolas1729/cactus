/*!
{
  "name": "Border Radius",
  "property": "borderradius",
  "caniuse": "border-radius",
  "polyfills": ["css3pie"],
  "tags": ["css"],
  "notes": [{
    "name": "Comprehensive Compat Chart",
<<<<<<< HEAD
    "href": "http://muddledramblings.com/table-of-css3-border-radius-compliance"
=======
    "href": "https://muddledramblings.com/table-of-css3-border-radius-compliance"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  }]
}
!*/
define(['Modernizr', 'testAllProps'], function(Modernizr, testAllProps) {
  Modernizr.addTest('borderradius', testAllProps('borderRadius', '0px', true));
});
