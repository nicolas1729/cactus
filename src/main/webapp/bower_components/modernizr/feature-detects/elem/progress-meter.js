/*!
{
  "name": "progress Element",
<<<<<<< HEAD
  "caniuse": "progressmeter",
=======
  "caniuse": "progress",
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  "property": ["progressbar", "meter"],
  "tags": ["elem"],
  "builderAliases": ["elem_progress_meter"],
  "authors": ["Stefan Wallin"]
}
!*/
define(['Modernizr', 'createElement'], function(Modernizr, createElement) {
  // Tests for progressbar-support. All browsers that don't support progressbar returns undefined =)
  Modernizr.addTest('progressbar', createElement('progress').max !== undefined);

  // Tests for meter-support. All browsers that don't support meters returns undefined =)
  Modernizr.addTest('meter', createElement('meter').max !== undefined);
});
