/*!
{
  "name": "Filesystem API",
  "property": "filesystem",
  "caniuse": "filesystem",
  "notes": [{
    "name": "W3 Draft",
<<<<<<< HEAD
    "href": "dev.w3.org/2009/dap/file-system/file-dir-sys.html"
=======
    "href": "http://dev.w3.org/2009/dap/file-system/file-dir-sys.html"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  }],
  "authors": ["Eric Bidelman (@ebidel)"],
  "tags": ["file"],
  "builderAliases": ["file_filesystem"],
  "knownBugs": ["The API will be present in Chrome incognito, but will throw an exception. See crbug.com/93417"]
}
!*/
define(['Modernizr', 'prefixed'], function(Modernizr, prefixed) {
  Modernizr.addTest('filesystem', !!prefixed('requestFileSystem', window));
});
