/*!
{
  "name": "CSS Font ch Units",
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "property": "csschunit",
  "tags": ["css"],
  "notes": [{
    "name": "W3C Spec",
<<<<<<< HEAD
    "href": "http://www.w3.org/TR/css3-values/#font-relative-lengths"
=======
    "href": "https://www.w3.org/TR/css3-values/#font-relative-lengths"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  }]
}
!*/
define(['Modernizr', 'modElem'], function(Modernizr, modElem) {
  Modernizr.addTest('csschunit', function() {
    var elemStyle = modElem.elem.style;
    var supports;
    try {
      elemStyle.fontSize = '3ch';
      supports = elemStyle.fontSize.indexOf('ch') !== -1;
    } catch (e) {
      supports = false;
    }
    return supports;
  });
});
