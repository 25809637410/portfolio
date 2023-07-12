$(function () {

  const page = $('.wrap section')

  page.mousewheel(function (event, delta) {
    if (delta > 0) {
      let prev = $(this).prev().offset().top
      $('html, body').stop().animate({
        scrollTop: prev
      }, 1000)
    } else if (delta < 0) {
      let next = $(this).next().offset().top
      $('html, body').stop().animate({
        scrollTop: next
      }, 1000)
    }
  }) //page_mousewheel_event
  //마우스 휠은 객체(page), 스크롤 이벤트는 window에 걸어줘야 함


  $(window).scroll(function () {
    /* if (window.scrollTop() === $('.page02').offset().top) { */
    if ($(this).scrollTop() === $('.page02').offset().top) {
      $('.page02 .page02_1').fadeIn(500)
      $('.page02 .page02_2').delay(500).fadeIn(500)
      $('.page02 .page02_3').delay(1000).fadeIn(500)
    } else {
      $('.page02 .sub_box div').fadeOut()
    } //page02_if

    //원페이지 스크롤일 때는 크거나 같다라는 값이 들어가야 함

    if ($(this).scrollTop() === $('.page03').offset().top) {
      $('.page03 .page03_1').animate({
        top: 0
      }, 500)
      $('.page03 .page03_2').delay(500).animate({
        top: 0
      }, 500)
      $('.page03 .page03_3').delay(1000).animate({
        top: 0
      }, 500)
      $('.page03 .page03_4').delay(1500).animate({
        top: 300
      }, 500)
      $('.page03 .page03_5').delay(2000).animate({
        top: 300
      }, 500)
      $('.page03 .page03_6').delay(2500).animate({
        top: 300
      }, 500)
    } //page03_if


  }) //window_scroll_event


}) //jquery

/* 
function modeChange(elem) {
  let mode = elem.innerHTML;
  if(mode === 'BLACK MODE') {
      elem.innerHTML = 'WHITE MODE';
      
      document.querySelector('html').style.backgroundColor = 'dimgrey';
      document.querySelector('header .title a').style.color = 'white';

      if(typeof(Storage) !== "undefined") {
          localStorage.setItem('skin', 'BLACK MODE');
      }

  } else {
      elem.innerHTML = 'BLACK MODE';

      document.querySelector('html').style.backgroundColor = 'white';
      document.querySelector('header .title a').style.color = 'black';

      if(typeof(Storage) !== "undefined") {
          localStorage.setItem('skin', 'WHITE MODE');
      }
  }
} // mode_change
 */



const $text = document.querySelector(".typing .text");

// 글자 모음
const letters = [
  "HTML",
  "CSS",
  "JavaScript"
];

// 글자 입력 속도
const speed = 100;
let i = 0;

// 타이핑 효과
const typing = async () => {
  const letter = letters[i].split("");

  while (letter.length) {
    await wait(speed);
    $text.innerHTML += letter.shift();
  }

  // 잠시 대기
  await wait(800);

  // 지우는 효과
  remove();
}

// 글자 지우는 효과
const remove = async () => {
  const letter = letters[i].split("");

  while (letter.length) {
    await wait(speed);

    letter.pop();
    $text.innerHTML = letter.join("");
  }

  // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
  i = !letters[i + 1] ? 0 : i + 1;
  typing();
}

// 딜레이 기능 ( 마이크로초 )
function wait(ms) {
  return new Promise(res => setTimeout(res, ms))
}

// 초기 실행
setTimeout(typing, 1500);


/* -------- page02 -------- */
/* swiper */

let pageSwiper = new Swiper('.page02_swiper', {
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});

$(function () {
  const slideTab = $('.page02 .slide_tab .tab');

  slideTab.click(function () {
    slideTab.removeClass('on')
    $(this).addClass('on')
  })
})

/* -------- page03 -------- */

/* modal */
$(document).ready(function () {
  $('.work03_1').click(function () {
    $('#openPopup').fadeIn(0);
    $('body').css('overflow', 'hidden')
  });
  $('.work03_2').click(function () {
    $('#openPopup2').fadeIn(0);
    $('body').css('overflow', 'hidden')
  });
  $('.work03_3').click(function () {
    $('#openPopup').fadeIn(0);
    $('body').css('overflow', 'hidden')
  });
  $('.work03_4').click(function () {
    $('#openPopup').fadeIn(0);
    $('body').css('overflow', 'hidden')
  });
  $('.work03_5').click(function () {
    $('#openPopup').fadeIn(0);
    $('body').css('overflow', 'hidden')
  });


  $('#openPopup').click(function () {
    $('#openPopup').fadeOut(0);
    $('body').css('overflow', 'auto')
  });
  $('#openPopup2').click(function () {
    $('#openPopup2').fadeOut(0);
    $('body').css('overflow', 'auto')
  });
})

/* swiper */
const swiper = new Swiper('.modal_swiper', {
  // Optional parameters  
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

/* modal */
/* $(document).ready(function ($) {
  $(".work03_1").on("click", function (event) {
    $("#popup_01").show();
    $("body").append("<div class='bg_on'></div>");
    $('body').style('position', 'fixed')
    $('body').style('overflow', 'hidden')
  });
  $("body").on("click", function (event) {
    if (event.target.className == 'close' || event.target.className == 'bg_on') {
      $("#popup_01").hide();
      $(".bg_on").hide();
    }
  });
}); */

/* 
$(document).ready(function(){
  $('.popup_open').click(function(){
  $('.popup').fadeIn();
  });
  $('.popup a').click(function(){
  $('.popup').fadeOut();
  });
});
 */

/* modal */
/* 
function showModal(elem) {
  modal.style.display = 'block';

  let curElem = elem.parentNode;

  let modalTitle = curElem.querySelector('.title').innerHTML;
  let modalImage = curElem.querySelector('img').src;
  let modalContent1 = curElem.querySelector('.desc').innerHTML;
  let modalContent2 = (new Date());

  let title = modal.querySelector('.title');
  title.innerHTML = modalTitle;

  let img = modal.querySelector('img');
  img.src = modalImage;

  let content1 = modal.querySelector('.content1');
  content1.innerHTML = modalContent1;

  let content2 = modal.querySelector('.content2');
  content2.innerHTML = modalContent2;
}

function closeModal() {
  modal.style.display = 'none';
}

function clickOutBoundModal(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
 */


/* ---------------img_sizeUp--------------- */
const imgSizeUp = document.querySelectorAll('.left_project li');
const sizeUp = document.getElementById('view');
const changeImg = document.querySelector('#view .view_img img');
const imgCloseBtn = document.querySelector('#view .img_close i');
const codeCloseBtn = document.querySelector('#code_popup .code_close i');
const body = document.querySelector('body');

for (let i = 0; i < imgSizeUp.length; i++) {
  imgSizeUp[i].onclick = function () {
    changeImg.src = './images/viewImg_0' + (i + 1) + '.png';
    sizeUp.style.visibility = 'visible';
    document.querySelector('#view .view_img').scrollTo(0, 0);
    body.style.overflow = 'hidden';
  };
  imgCloseBtn.onclick = function () {
    sizeUp.style.visibility = 'hidden';
    body.style.removeProperty('overflow');
  };
  changeImg.onclick = function () {
    sizeUp.style.visibility = 'hidden';
    body.style.removeProperty('overflow');
  };
}

/* ---------------go_to_btn--------------- */
const viewCode = document.getElementById('code');
const viewWeb = document.getElementById('website');
const viewGit = document.getElementById('git');

const codePopup = document.getElementById('code_popup');

viewCode.onclick = function () {
  codePopup.style.visibility = 'visible';
  body.style.overflow = 'hidden';
};
codeCloseBtn.onclick = function () {
  codePopup.style.visibility = 'hidden';
  body.style.removeProperty('overflow');
};

function webOpen() {
  window.open('https://.github.io/team_project/');
}

function gitOpen() {
  window.open('https://github.com/');
}

/* ---------------code_tab--------------- */
const TabBtn = document.querySelectorAll('.code_tab_btn li');
const codeTab = document.querySelectorAll('.code_img .tab');

for (let i = 0; i < TabBtn.length; i++) {
  TabBtn[i].onclick = function () {
    codeTab[i].classList.add('tab_open');

    if (TabBtn[i] !== codeTab[i]) {
      codeTab.classList.remove('tab_open');
    }
  };
}

/* -------- page04 -------- */