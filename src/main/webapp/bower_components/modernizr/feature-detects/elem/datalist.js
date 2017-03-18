/*!
{
  "name": "datalist Element",
  "caniuse": "datalist",
  "property": "datalistelem",
  "tags": ["elem"],
  "builderAliases": ["elem_datalist"],
  "warnings": ["This test is a dupe of Modernizr.input.list. Only around for legacy reasons."],
  "notes": [{
    "name": "CSS Tricks Article",
<<<<<<< HEAD
    "href": "http://css-tricks.com/15346-relevant-dropdowns-polyfill-for-datalist/"
  },{
    "name": "Mike Taylor Test",
    "href": "http://miketaylr.com/test/datalist.html"
  },{
    "name": "Mike Taylor Code",
    "href": "http://miketaylr.com/code/datalist.html"
=======
    "href": "https://css-tricks.com/15346-relevant-dropdowns-polyfill-for-datalist/"
  },{
    "name": "Mike Taylor Code",
    "href": "https://miketaylr.com/code/datalist.html"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  }]
}
!*/
define(['Modernizr', 'test/input'], function(Modernizr) {
  // lol. we already have a test for datalist built in! silly you.
  // Leaving it around in case anyone's using it

  Modernizr.addTest('datalistelem', Modernizr.input.list);
});
