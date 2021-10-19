// init Isotope
var $grid = $('#product-list').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});


// init Timer
initTimer();
// 3.  Init Timer
    function initTimer(){
        if($('.timer').length){

            // var target_date = new Date("September 18, 2021").getTime();

            var date = new Date();
            date.setDate(date.getDate() + 3);
            var target_date = date.getTime(); 

            //variables for time units
            var days, hours, minutes, seconds;
            var d = $('#day');
            var h = $('#hour');
            var m = $('#minute');
            var s = $('#second');

            setInterval(function (){

                var current_date = new Date().getTime();
                var seconds_left = (target_date - current_date) / 1000;

                days = parseInt(seconds_left / 86400);
                seconds_left = seconds_left % 86400;

                hours = parseInt(seconds_left / 3600);
                seconds_left = seconds_left % 3600;

                minutes = parseInt(seconds_left / 60);
                seconds = parseInt(seconds_left % 60);

                d.text(days);
                h.text(hours);
                m.text(minutes);
                s.text(seconds);
            });
        }
    }


//init Slider
$(document).ready(function() {
    $("#news-slider").owlCarousel({
        items : 6,
        itemsDesktopExtraLarge:[1201,3],
        itemsDesktopLarge:[1025,3],
        itemsDesktopLaptop:[769,2],
        itemsMobileTablet:[481,1],
        itemsMobile:[320,1],
        pagination:false,
        navigation:false,
        navigationText:["",""],
        autoPlay:false
    });
});    


//init BacktoTop
//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


//init Women's Product
function changeImage(element) {

var main_prodcut_image = document.getElementById('main_product_image');
main_prodcut_image.src = element.src;
}


//init Accessories
const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);


//init LogoSlider
$('.clients-carousel').owlCarousel({
  autoplay: true,
  loop: true,
  margin: 15,
  dots: false,
  slideTransition: 'linear',
  autoplayTimeout: 4500,
  autoplayHoverPause: true,
  autoplaySpeed: 4500,
  responsive: {
    0: {
      items: 2
    },
    500: {
      items: 3
    },
    600: {
      items: 4
    },
    800: {
      items: 4
    },
    1200: {
      items: 4
    }

  }
});


//init Reviews
var swiper = new Swiper(".review-slide", {
  loop:true,
  spaceBetween:20,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  },
});