/*!
{
  "name": "XDomainRequest",
  "property": "xdomainrequest",
  "tags": ["cors", "xdomainrequest", "ie9", "ie8"],
  "authors": ["Ivan Pan (@hypotenuse)"],
  "notes": [
  {
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/XDomainRequest"
  },
  {
    "name": "MSDN documentation",
    "href": "https://msdn.microsoft.com/library/ie/cc288060.aspx/"
  }]
}
!*/
/* DOC
<<<<<<< HEAD
Detects support for XDomainReuqest in ie9 & ie8
=======
Detects support for XDomainRequest in IE9 & IE8
>>>>>>> 533092147c410637b99bf57166ee237aec486555
*/
define(['Modernizr'], function(Modernizr) {
  Modernizr.addTest('xdomainrequest', 'XDomainRequest' in window);
});
