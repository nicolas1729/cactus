/*!
{
  "name": "Quota Storage Management API",
  "property": "quotamanagement",
  "tags": ["storage"],
  "builderAliases": ["quota_management_api"],
  "notes": [{
    "name": "W3C Spec",
<<<<<<< HEAD
    "href": "http://www.w3.org/TR/quota-api/"
=======
    "href": "https://www.w3.org/TR/quota-api/"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  }]
}
!*/
/* DOC
Detects the ability to request a specific amount of space for filesystem access
*/
define(['Modernizr', 'prefixed'], function(Modernizr, prefixed) {
  Modernizr.addTest('quotamanagement', function() {
    var tempStorage = prefixed('temporaryStorage', navigator);
    var persStorage = prefixed('persistentStorage', navigator);

    return !!(tempStorage && persStorage);
  });
});
