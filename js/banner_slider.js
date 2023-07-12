$(function () {

  const eleWidth = $('.frame ul li').innerWidth()
  let state = false
  let playOn = false
  let direction = 'left' //true-false 아님
  let bannerAuto //무한 반복 일어나는 setInterval함수를 멈추기 위해 변수 사용. 변수 사용 안하고 실행 하는 경우 더 많음


  function play() {

    if (!playOn) {
      playOn = true
      bannerAuto = setInterval(function () {
        if (direction === 'left') {
          $('.prev').click()
        } else {
          $('.next').click()
        }
      }, 2000)
    }

    if (playOn) {
      $('.frame li a').mouseover(function () {
        stop()
      })
    } //멈춘 상태에서 멈출 수는 없으므로 play함수 권역에 넣어줌

  } //play()



  function stop() {
    if (playOn) {
      playOn = false
      clearInterval(bannerAuto)
    }

    $('.frame li a').mouseout(function () {
      play()
    })

    $('.frame li a').click(function () {
      location.href
    })

  } //stop()



  function left() {
    stop()
    direction = 'left'
    $('.frame ul').animate({
      left: eleWidth * -1
    }, 500, function () {
      $(this).children('li:first').insertAfter($(this).children('li:last'))
      $(this).css('left', 0)
      state = false
      play()
    }) //js에서는 기호나 단위를 쓸 수 없기 때문에 "eleWidth * -1"로 표현

  } //left()



  function right() {
    stop()
    direction = 'right'
    $('.frame ul li:last').insertBefore($('.frame ul li:first'))
    $('.frame ul').css('left', eleWidth * -1)
    $('.frame ul').animate({
      left: 0
    }, 500, function () {
      state = false
      play()
    })

  } //right()



  $('.prev').click(function () {
    if (!state) {
      state = true
      left()
    }
  }) //prev_btn_click_event



  $('.next').click(function () {
    if (!state) {
      state = true
      right()
    }
  }) //next_btn_click_event



  $('.stop').click(function () {
    stop()
  }) //stop_btn_click_event

  $('.play').click(function () {
    play(0)
  }) //stop_btn_click_event

  $('.play').click() //초기 강제 자동 실행(이벤트 실행)

}) //jquery_fuction