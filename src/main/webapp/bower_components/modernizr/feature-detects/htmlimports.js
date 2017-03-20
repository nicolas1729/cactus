/*!
{
  "name": "HTML Imports",
  "notes": [
    {
      "name": "W3C HTML Imports Specification",
<<<<<<< HEAD
      "href": "http://w3c.github.io/webcomponents/spec/imports/"
=======
      "href": "https://w3c.github.io/webcomponents/spec/imports/"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
    },
    {
      "name": "HTML Imports - #include for the web",
      "href": "http://www.html5rocks.com/en/tutorials/webcomponents/imports/"
    }
  ],
  "polyfills": ["polymer-htmlimports"],
  "property": "htmlimports",
  "tags": ["html", "import"]
}
!*/
/* DOC
Detects support for HTML import, a feature that is used for loading in Web Components.
 */

define(['addTest', 'createElement'], function(addTest, createElement) {
  addTest('htmlimports', 'import' in createElement('link'));
});
