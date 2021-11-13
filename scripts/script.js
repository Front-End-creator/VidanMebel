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
        $(".about_us__list__items svg circle").addClass("animate");
        $(".about_us__list__items svg circle").css("stroke-dasharray", "0");
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
  $(".navbar__item, .mobileMenu_list, .call_to_action__buttons").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 500);
  });
  $(".toggle, .mobileMenu_list a").on("click", function (event) {
    $('.toggle').toggleClass('active');
    $('.mobileMenu').toggleClass('active');
  });
  $(".lead").on("click", function () {
    $('.backlayer').fadeIn();
    $('body').addClass('hidden');
  });
  $(".consultation_button").on("click", function () {
    $('.consultation_backlayer').fadeIn();
    $('body').addClass('hidden');
  });
  $(".helperlayer").on("click", function () {
    $('.backlayer, .consultation_backlayer').fadeOut();
    $('body').removeClass('hidden');
});
let element = document.getElementById('tel');
let maskOptions = {
  mask: '+38(000)-000-00-00',
  lazy: false
} 
let mask = new IMask(element, maskOptions);
});
const slides = document.querySelectorAll('.slides');
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
$(document).ready(function() {
  const form = $('#form');
  form.bind('submit', formSend);


  async function formSend(e){
      e.preventDefault();
      let error = formValidate(form);

      if(error === 0){
        let name = $('#name').val();
        let tel = $('#tel').val();
        let message = $('#message').val();
        if(message == ""){
          message = "-";
        }
        const token = "2108676986:AAHpXF3U82xBQNfUBgNMXGHCOfYL98j-GqI";
        const chatId = "-635947338";
        let url = 'https://api.telegram.org/bot' + token +'/sendMessage?chat_id=' + chatId + '&text=';
        let xhttp = new XMLHttpRequest();
        $('.text-success').slideDown();
        xhttp.open("GET", url + "Vidan, у вас новый клиент.%0AИмя : " + name + ",%0AТелефон : " + tel + ",%0AСообщение : " + message, true);
        xhttp.send();
        $('#name').val("");
        $('#tel').val("");
        $('#message').val("");
        $('.consultation_backlayer').fadeOut();
        $('.consultation_access').fadeIn();
        $('.consultation_access').delay(1000).fadeOut();
        $('body').removeClass('hidden');
      }
  }

  function formValidate(form){
      let error = 0;
      let formReq = $('.req');
      
      for(let index = 0; index < formReq.length; index++){
          const input = formReq[index];
          RemoveError(input);

          if($(input).hasClass('phone')){
              if(PhoneNumberValidate(input)){
                  AddSpecError(input);
                  error++;
              }
          }
            if($(input).val() === ''){
                AddError(input);
                error++;
            }
      }
      return error;
  }

  function AddError(input){
      $(input).addClass('_error');
      $(input).parent().addClass('_error');
  }

  function AddSpecError(input){
    $(input).parent().addClass('_error_phone');
    $(input).addClass('_error');
}

  function RemoveError(input){
      $(input).removeClass('_error _error_phone');
      $(input).parent().removeClass('_error _error_phone');
  }
  

  function PhoneNumberValidate(input){
      return !/[+38]\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{2})\2([0-9]{2})/.test(input.value);
  }
});