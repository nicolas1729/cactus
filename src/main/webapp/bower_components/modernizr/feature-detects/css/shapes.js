/*!
{
  "name": "CSS Shapes",
  "property": "shapes",
  "tags": ["css"],
  "notes": [{
    "name": "CSS Shapes W3C specification",
<<<<<<< HEAD
    "href": "http://www.w3.org/TR/css-shapes"
  },{
    "name": "Examples from Adobe",
    "href": "http://html.adobe.com/webplatform/layout/shapes"
=======
    "href": "https://www.w3.org/TR/css-shapes"
  },{
    "name": "Examples from Adobe",
    "href": "http://webplatform.adobe.com/shapes/"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  }, {
    "name": "Samples showcasing uses of Shapes",
    "href": "http://codepen.io/collection/qFesk"
  }]
}
!*/
define(['Modernizr', 'testAllProps'], function(Modernizr, testAllProps) {
  Modernizr.addTest('shapes', testAllProps('shapeOutside', 'content-box', true));
});
