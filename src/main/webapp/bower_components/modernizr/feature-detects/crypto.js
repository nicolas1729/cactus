<<<<<<< HEAD
﻿/*!
=======
/*!
>>>>>>> 533092147c410637b99bf57166ee237aec486555
{
  "name": "Web Cryptography",
  "property": "cryptography",
  "caniuse": "cryptography",
  "tags": ["crypto"],
  "authors": ["roblarsen"],
  "notes": [{
    "name": "W3C Editor's Draft",
<<<<<<< HEAD
    "href": "http://www.w3.org/TR/WebCryptoAPI/"
=======
    "href": "https://www.w3.org/TR/WebCryptoAPI/"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  }],
  "polyfills": [
    "polycrypt"
  ]
}
!*/
/* DOC
Detects support for the cryptographic functionality available under window.crypto.subtle
*/
define(['Modernizr', 'prefixed'], function(Modernizr, prefixed) {
  var crypto = prefixed('crypto', window);
  Modernizr.addTest('crypto', !!prefixed('subtle', crypto));
});
