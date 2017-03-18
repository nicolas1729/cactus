/*!
{
  "name": "CSS vw unit",
  "property": "cssvwunit",
  "caniuse": "viewport-units",
  "tags": ["css"],
  "builderAliases": ["css_vwunit"],
  "notes": [{
    "name": "Related Modernizr Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/572"
  },{
    "name": "JSFiddle Example",
<<<<<<< HEAD
    "href": "http://jsfiddle.net/FWeinb/etnYC/"
=======
    "href": "https://jsfiddle.net/FWeinb/etnYC/"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  }]
}
!*/
define(['Modernizr', 'testStyles'], function(Modernizr, testStyles) {
  testStyles('#modernizr { width: 50vw; }', function(elem) {
    var width = parseInt(window.innerWidth / 2, 10);
    var compStyle = parseInt((window.getComputedStyle ?
                              getComputedStyle(elem, null) :
                              elem.currentStyle).width, 10);

    Modernizr.addTest('cssvwunit', compStyle == width);
  });
});
