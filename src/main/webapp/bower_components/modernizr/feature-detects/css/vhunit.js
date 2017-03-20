/*!
{
  "name": "CSS vh unit",
  "property": "cssvhunit",
  "caniuse": "viewport-units",
  "tags": ["css"],
  "builderAliases": ["css_vhunit"],
  "notes": [{
    "name": "Related Modernizr Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/572"
  },{
    "name": "Similar JSFiddle",
<<<<<<< HEAD
    "href": "http://jsfiddle.net/FWeinb/etnYC/"
=======
    "href": "https://jsfiddle.net/FWeinb/etnYC/"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  }]
}
!*/
define(['Modernizr', 'testStyles'], function(Modernizr, testStyles) {
  testStyles('#modernizr { height: 50vh; }', function(elem) {
    var height = parseInt(window.innerHeight / 2, 10);
    var compStyle = parseInt((window.getComputedStyle ?
                              getComputedStyle(elem, null) :
<<<<<<< HEAD
                              elem.currentStyle)['height'], 10);
=======
                              elem.currentStyle).height, 10);
>>>>>>> 533092147c410637b99bf57166ee237aec486555
    Modernizr.addTest('cssvhunit', compStyle == height);
  });
});
