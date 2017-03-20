define(['Modernizr', 'modElem'], function(Modernizr, modElem) {
  var mStyle = {
<<<<<<< HEAD
    style : modElem.elem.style
=======
    style: modElem.elem.style
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  };

  // kill ref for gc, must happen before mod.elem is removed, so we unshift on to
  // the front of the queue.
  Modernizr._q.unshift(function() {
    delete mStyle.style;
  });

  return mStyle;
});
