var scrollFunc = function() {
  var scroll = window.scrollY;
  var scrollSize = 600;
  if (scroll >= scrollSize) {
    document.getElementById('up').style.display = 'block';
  } else {
    document.getElementById('up').style.display = 'none';
    document.getElementById('up').style.display = 'default';
  }
};

window.addEventListener("scroll", scrollFunc);


function pageUp(){
	document.body.scrollTop = 0; // For safari
	document.documentElement.scrollTop = 0; // for chrome, firefox, ıe and opera
}