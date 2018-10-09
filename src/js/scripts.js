$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        dots: true,
        items: 4,
        responsive : {
            0 : {
                items: 2,
            },
            576 : {
                items: 2,
            },
            768 : {
                items: 4,
                dots: true
            }
        }
    
    });
    // $(".loader").css('opacity', '0').css('background-color', 'transparent');
    // function loaderDisp(){
    //     $('.loader').css('display', 'none');
    //     console.log('yes');
    //   }
    // setTimeout(loaderDisp, 3000);

});


var
        images = document.images,
        images_total_count = images.length,
        images_loaded_count = 0,
        total_count = images_total_count,
        loaded_count = 0;
        function animation() {
            setTimeout(function () {
                var loader = '.loader';
                var text = '.loader__text';
                var ring = '.loader__ring';
                $(text).animate({left: "-100%"}, 600)
                $(ring).animate(
                    {
                    position: "absolute",
                    right: "-100%"
                }, 600)
                $(loader).animate({
                    opacity: "0"
                }, 400);
            setTimeout(() => {
                $(loader).css('display','none');
            }, 1800);
          
        }, 3000);
        }
    if(images_total_count>0){
      for (var i = 0; i < images_total_count; i++) {
          var image_clone = new Image();
            image_clone.onload = loaded();
            image_clone.onerror = loaded();
            image_clone.src = images[i].src
            console.log('3');
      }   
      function loaded(){
            loaded_count++;
            if(loaded_count >= total_count*2){
                console.log(total_count);
                console.log(loaded_count)
                animation();
          }
      }
    }
    else{
      setTimeout(function () {
        var preloader = $('.loader');
        console.log('2');
              $(preloader).css('opacity', '0').css('background-color', 'transparent');
              setTimeout(() => {
                $(preloader).css('display','none')
              }, 1800);
              
          }, 1000);}

//radius text(plugin)
$(".head__subcaption").arctext({
    radius: 200,
})
//hamburger 
  var hamburger = document.querySelector(".hamburger");
  var nav = document.querySelector(".nav");

  hamburger.addEventListener("click", function() {
      if (hamburger.classList.contains("is-active")) {
        hamburger.classList.toggle("is-active");
        nav.style='left:-100%;'
      }
      else {
        hamburger.classList.toggle("is-active");
        nav.style='left:0%;'
      }

  });

//screen width detect
var el =  document.querySelector(".js-hamburger");
if (window.outerWidth <= 575) {
    el.classList.add('align-self-end');
}
window.onresize = function(){
    if (window.outerWidth <= 575) {
        el.classList.add('align-self-end');
    }
    else if (window.outerWidth >= 576 && el.classList.contains('align-self-end')) {
        el.classList.remove('align-self-end');
    }
}

//blocks animation
Revealator.effects_padding  =  '-400' ;

// browser detect
var doc = document.getElementById('js-browser');
doc.setAttribute('data-useragent', navigator.userAgent);

class Scroll {
    constructor (el) {
        this._el = el;
        this._scrollEl;
        this._temp;
        this._coord;
        this.Init();
    }
    Init(){
        const self = this;
        $(self._el).on('click', '.nav__link',function (){
            self._temp = $(this).attr('scroll');
            self._scrollEl = self._temp;
            self.ElementCord();
            console.log(self._temp)
        });
    }
    ElementCord(){
        const self = this;
        var section = document.getElementById(self._scrollEl);
        var coord = section.getBoundingClientRect().top;
        self._coord = coord;
        self.Scroll();
    }
    Scroll(){
        const self = this;
        $('html, body').animate({
            scrollTop: self._coord + "px"
        }, 700, 'swing');
    }
}
const scroll = new Scroll('.js-scroll');