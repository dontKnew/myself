
window.onload = function() {
  //auto typer..
  var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-type');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
  // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);

    // back to top
mybutton = document.querySelector(".back-to-top");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
};// window.onload end()
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

    
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
    };
TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];
  if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  var that = this;
  var delta = 200 - Math.random() * 100;
  if (this.isDeleting) { delta /= 2; }
  if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  setTimeout(function() {
        that.tick();
        }, delta);
    };


function openMenu(){
    document.getElementById('header').style.marginLeft = "-10px";
    document.querySelector('.fa-bars').style.display = "none";
    document.querySelector('.fa-times-circle').style.marginLeft = "0";
}
function closeMenu(){
    document.querySelector('.fa-bars').style.display = "block";
    document.getElementById('header').style.marginLeft = "-300px";
    document.querySelector('.fa-times-circle').style.marginLeft = "-300px";   
}

// Progress Bar Note : do it later...
var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var htmlBar = document.getElementById("htmlBar");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        htmlBar.style.width = width + "%";
        htmlBar.innerHTML = width + "%";
      }
    }
  }
}

