/*!
{
  "name": "script[defer]",
  "property": "scriptdefer",
  "caniuse": "script-defer",
  "tags": ["script"],
  "builderAliases": ["script_defer"],
  "authors": ["Theodoor van Donge"],
<<<<<<< HEAD
  "warnings": ["Browser implementation of the `defer` attribute vary: http://stackoverflow.com/questions/3952009/defer-attribute-chrome#answer-3982619"],
=======
  "warnings": ["Browser implementation of the `defer` attribute vary: https://stackoverflow.com/questions/3952009/defer-attribute-chrome#answer-3982619"],
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  "knownBugs": ["False positive in Opera 12"]
}
!*/
/* DOC
Detects support for the `defer` attribute on the `<script>` element.
*/
define(['Modernizr', 'createElement'], function(Modernizr, createElement) {
  Modernizr.addTest('scriptdefer', 'defer' in createElement('script'));
});
