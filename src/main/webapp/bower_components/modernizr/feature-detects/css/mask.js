/*!
{
  "name": "CSS Mask",
  "caniuse": "css-masks",
  "property": "cssmask",
  "tags": ["css"],
  "builderAliases": ["css_mask"],
  "notes": [
    {
      "name": "Webkit blog on CSS Masks",
<<<<<<< HEAD
      "href": "http://www.webkit.org/blog/181/css-masks/"
    },
    {
      "name": "Safari Docs",
      "href": "http://developer.apple.com/library/safari/#documentation/InternetWeb/Conceptual/SafariVisualEffectsProgGuide/Masks/Masks.html"
    },
    {
      "name": "Mozilla css svg mask (not this)",
      "href": "http://developer.mozilla.org/en/CSS/mask"
    },
    {
      "name": "Combine with clippaths for awesomeness",
      "href": "http://generic.cx/for/webkit/test.html"
=======
      "href": "https://webkit.org/blog/181/css-masks/"
    },
    {
      "name": "Safari Docs",
      "href": "https://developer.apple.com/library/safari/#documentation/InternetWeb/Conceptual/SafariVisualEffectsProgGuide/Masks/Masks.html"
    },
    {
      "name": "CSS SVG mask",
      "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/mask"
    },
    {
      "name": "Combine with clippaths for awesomeness",
      "href": "https://generic.cx/for/webkit/test.html"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
    }
  ]
}
!*/
define(['Modernizr', 'testAllProps'], function(Modernizr, testAllProps) {
  Modernizr.addTest('cssmask', testAllProps('maskRepeat', 'repeat-x', true));
});
