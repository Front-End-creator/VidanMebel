$(window).scroll(function(){
    topWindow = $(window).scrollTop();
    if ( topWindow > 100) {
        $('.navbar__background').addClass('show');
        $('.navbar__item:nth-child(1)').addClass('show');
    } else {
        $('.navbar__background').removeClass('show');
        $('.navbar__item:nth-child(1)').removeClass('show');
}
});

let time = 2000, cc = 1;
$(window).scroll(function() {
  $('.about_us__list__items').each(function() {
    let
      cPos = $(this).offset().top,
      topWindow = $(window).scrollTop();
    if (cPos < topWindow + 500) {
      if (cc < 2) {
        $(".number").addClass("visible");
        $(".about_us__list__items svg circle").addClass("active");
        $(".counter__container span").addClass("visible");
        $('.about_us__list__items div').each(function() {
          let
            i = 0,
            num = $(this).data('num');
            let step = time / num,
            that = $(this)
            int = setInterval(function() {
              if (i <= num) {
                that.html(i);
              } else {
                cc = cc + 2;
                clearInterval(int);
              }
              if(num > 1000){
                i += 10;
                } else {
                i++;
                }
            }, step);
        });
      }
    }
  });
});


$(document).ready(function(){
  $(".navbar__item").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 500);
  });
});

const slides = document.querySelectorAll('.slides');
console.log(slides);
for( const slide of slides){
    slide.addEventListener('click', () =>{
        removeActive();
        slide.classList.add('active');
    });
}

function removeActive(){
    slides.forEach((slide) =>{
        slide.classList.remove('active');
    })
}