/*!
{
  "name": "bdi Element",
  "property": "bdi",
  "notes": [{
    "name": "MDN Overview",
    "href": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi"
  }]
}
!*/
/* DOC
Detect support for the bdi element, a way to have text that is isolated from its possibly bidirectional surroundings
*/
<<<<<<< HEAD
define(['Modernizr', 'addTest', 'createElement', 'docElement'], function(Modernizr, addTest, createElement, docElement) {
=======
define(['Modernizr', 'createElement', 'docElement'], function(Modernizr, createElement, docElement) {
>>>>>>> 533092147c410637b99bf57166ee237aec486555
  Modernizr.addTest('bdi', function() {
    var div = createElement('div');
    var bdi = createElement('bdi');

<<<<<<< HEAD
    bdi.innerHTML = '&#1573';
=======
    bdi.innerHTML = '&#1573;';
>>>>>>> 533092147c410637b99bf57166ee237aec486555
    div.appendChild(bdi);

    docElement.appendChild(div);

    var supports = ((window.getComputedStyle ?
          getComputedStyle(bdi, null) :
<<<<<<< HEAD
          bdi.currentStyle)['direction'] === 'rtl');
=======
          bdi.currentStyle).direction === 'rtl');
>>>>>>> 533092147c410637b99bf57166ee237aec486555

    docElement.removeChild(div);

    return supports;
  });
});
