// first slider
let tabcontents = document.querySelectorAll('.tabcontent')
let typeBtns = document.querySelectorAll('[data-type]')


typeBtns.forEach(btn => {
    btn.onclick = () => {
        typeBtns.forEach(el => el.classList.remove('tabheader__item_active'))

        btn.classList.add('tabheader__item_active')

        let num = +btn.getAttribute('data-type')
        slides(num)
    }
})

slides(0)

function slides(n) {
    tabcontents.forEach(item => item.classList.add('hide') )

    tabcontents[n].classList.remove('hide')
    tabcontents[n].classList.add('show', 'fade')
}

// second slider
let slide = document.querySelectorAll('.offer__slide')
let close = document.querySelector('.offer__slider-prev')
let next = document.querySelector('.offer__slider-next')
let text = document.querySelector('#current')
let total = document.querySelector('#total')


let slide_next = 0

close.onclick = () => {
    slide_next--
    shou_slide(slide_next)
}


next.onclick = () => {
    slide_next++
    shou_slide(slide_next)
}


function shou_slide(nc) {
    if (nc >= slide.length) {
        slide_next = 0
    }

    if (nc == -1) {
        slide_next = slide.length - 1
    }
    slide.forEach((slide) => {
        slide.style.display = "none"
        slide.classList.remove('fade')
    })
    slide[slide_next].classList.add('fade')
    slide[slide_next].style.display = "block"

    text.innerHTML = '0' + (slide_next + 1)
}

shou_slide()

  // modal

  let modalClick = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal'),
    modalClose = document.querySelector('[data-close]')

  function showModal() {
    modal.classList.toggle('show')
    document.body.style.overflow = 'hidden'
  }

  modalClick.forEach((btn) => {
    btn.addEventListener('click', showModal)
  })

  modalClose.addEventListener('click', hideModal)

  function hideModal() {
    modal.classList.toggle('show')
    document.body.style.overflow = ''
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      hideModal()
    }
  })

let tabcontentss = document.querySelectorAll('.tabcontent')
let btns = document.querySelectorAll('.tabheader__item')

showTabs()

function showTabs(n = 0) {
    tabcontentss.forEach(element => {
        element.style.display = "none"
        element.classList.remove('fade')
    });
    tabcontentss[n].classList.add('fade')
    tabcontentss[n].style.display = "block"
}


btns.forEach((btn, index) => {
    btn.onclick = () => {
        btns.forEach(el => el.classList.remove('tabheader__item_active'))

        btn.classList.add('tabheader__item_active')
        showTabs(index)
    }
}) 

window.onscroll = function(ev) {
    if (Math.ceil(window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // you're at the bottom of the page
        modal.style.display = 'block'
    }
modalClose.onclick = () => {
    modal.style.display = 'none'
}
};

// calculator
let user_info = {gender: 'woman'}

let genBtns = document.querySelectorAll('#gender .calculating__choose-item')
let calcInputs = document.querySelectorAll('.calculating__choose_medium input')
let activeBtns = document.querySelectorAll('.calculating__choose_big .calculating__choose-item')
let resultOutput = document.querySelector('#result')


genBtns.forEach(btn => {
    btn.onclick = () => {
        genBtns.forEach(el => el.classList.remove('calculating__choose-item_active'))

        btn.classList.add('calculating__choose-item_active')

        user_info.gender = btn.getAttribute('data-g')
    }
});


calcInputs.forEach(input => {
    input.onkeyup = () => {
        user_info[input.id] = +input.value 
    }
})


activeBtns.forEach(btn => {
    btn.onclick = () => {
        activeBtns.forEach(el => el.classList.remove('calculating__choose-item_active'))
        btn.classList.add('calculating__choose-item_active')
        let activeNum = +btn.getAttribute('data-act') 

        let {age, weight, height, gender} = user_info

        let result = (10 * weight) + (6.25 * height) - (5 * age)

        if(gender === 'man') {
            resultOutput.innerHTML = Math.round((result + 5) * activeNum)
        } else {
            resultOutput.innerHTML = Math.round((result - 161) * activeNum)
        }

    }
})




document.addEventListener('DOMContentLoaded', function() {
    // конечная дата, например 1 июля 2021
    const deadline = new Date(2023, 05, 20);
    // id таймера
    let timerId = null;
    // склонение числительных
    function declensionNum(num, words) {
      return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }
    // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
    function countdownTimer() {
      const diff = deadline - new Date();
      if (diff <= 0) {
        clearInterval(timerId);
      }
      const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
      const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
      $days.textContent = days < 10 ? '0' + days : days;
      $hours.textContent = hours < 10 ? '0' + hours : hours;
      $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
      $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
      $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
      $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
      $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
      $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
    }
    // получаем элементы, содержащие компоненты даты
    const $days = document.querySelector("#days");
    const $hours = document.querySelector('#hours');
    const $minutes = document.querySelector('#minutes');
    const $seconds = document.querySelector('#seconds');
    // вызываем функцию countdownTimer
    countdownTimer();
    // вызываем функцию countdownTimer каждую секунду
    timerId = setInterval(countdownTimer, 1000);
  });