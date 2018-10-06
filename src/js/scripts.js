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
    //radius text(plugin)
    $(".head__subcaption").arctext({
        radius: 200,
    })
  });

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