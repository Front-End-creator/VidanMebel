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
        $(".about_us__list__items span").addClass("visible");
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


const slides = document.querySelectorAll('.our_work__items'),
      zoom = document.querySelector('.zoom__container'),
      zoom__img = document.querySelector('.zoom__img');
  document.querySelector('.zoom__container__helplayer').addEventListener('click', () =>{
  zoom.classList.remove('active');
});
for( const slide of slides){
    slide.addEventListener('click', () =>{
        zoom__img.setAttribute("src", slide.children[0].getAttribute("src"));
        zoom.classList.add('active');
    });
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


var arrLang = {
  'ua': {
      'menu__about': 'Про Нас',
      'menu__service': 'Як ми працюємо',
      'menu__work': 'Роботи',
      'menu__consultation': 'Консультація',
      'call_to_action__text': 'Заповни форму за 30 секунд та отримай повну консультацію зі свого питання',
      'butt__call': "Зворотній зв'язок",
      'butt__ourwork': 'наші роботи',
      'why_choose': 'Чому обирають нас',
      'counter__age': 'років досвіду у сфері меблів',
      'counter__cupboard': 'проектів успішно реалізовано',
      'counter__client': 'задоволених клієнтів у 2021 році',
      'counter__help': 'цілодобова підтримка',
      'counter__month': 'місяців гарантії',
      'response': 'відгуки про нас',
      'team__supervisor': 'Керівник та ідейний натхненник компанії',
      'team__constructor': 'Головний конструктор та проектувальник',
      'team__topmanager': 'Старший менеджер з продажу',
      'team__spec': 'Фахівець з кухонь',
      'team__manager': 'Менеджер з продажу',
      'name__valera': 'Валерій',
      'name__anna': 'Aнна',
      'name__natalia': 'Наталія',
      'name__galyna': 'Галина',
      'name__irina': 'Ірина',
      'call_to_action__p': 'Пройди тест та дізнайся вартість меблів за одну хвилину!',
      'call_to_action__butt__kitchen': 'Вартість кухні',
      'call_to_action__butt__cupboard': 'Вартість шафи',
      'contacts': 'Контакти',
      'howfind': 'Як нас знайти',
      'social': 'Ми в соц. мережах',
  },
  'ru': {
      'menu__about': 'О нас',
      'menu__service': 'Как мы работаем',
      'menu__work': 'Работы',
      'menu__consultation': 'Консультация',
      'call_to_action__text': 'Заполни форму за 30 секунд и получи полную консультацию по своему вопросу',
      'butt__call': "Обратная связь",
      'butt__ourwork': 'наши работы',
      'why_choose': 'Почему выбирают нас',
      'counter__age': 'лет опыта в сфере мебели',
      'counter__cupboard': 'проектов успешно реализовано',
      'counter__client': 'довольных клиентов в 2021 году',
      'counter__help': 'круглосуточная поддержка',
      'counter__month': 'месяцев гарантии',
      'response': 'отзывы про нас',
      'team__supervisor': 'Руководитель и идейный вдохновитель компании',
      'team__constructor': 'Конструктор-проектировщик',
      'team__topmanager': 'Старший менеджер по продажам',
      'team__spec': 'Специалист по кухням',
      'team__manager': 'Менеджер по продажам',
      'name__valera': 'Валерий',
      'name__anna': 'Анна',
      'name__natalia': 'Наталья',
      'name__galyna': 'Галина',
      'name__irina': 'Ирина',
      'call_to_action__p': 'Пройди тест и узнай стоимость мебели за одну минуту!',
      'call_to_action__butt__kitchen': 'Стоимость кухни',
      'call_to_action__butt__cupboard': 'Стоимость шкафа',
      'contacts': 'Контакты',
      'howfind': 'Как нас найти',
      'social': 'Мы в соц. сетях',
  }
};


$(function() {
  $('.lang__button').click(function() {
      var lang = $(this).attr('id');
      $('.lang').each(function(index, element) {
          $(this).text(arrLang[lang][$(this).attr('name')]);
      });
  });
});