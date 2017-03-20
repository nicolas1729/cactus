define(['Modernizr', 'createElement'], function(Modernizr, createElement) {
  /**
   * Create our "modernizr" element that we do most feature tests on.
   *
   * @access private
   */

  var modElem = {
<<<<<<< HEAD
    elem : createElement('modernizr')
=======
    elem: createElement('modernizr')
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  };

  // Clean up this element
  Modernizr._q.push(function() {
    delete modElem.elem;
  });

  return modElem;
});
