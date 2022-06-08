let boxItems = document.querySelectorAll('.box-item')
let secondsCount = document.querySelector('.seconds')
let minutesCount = document.querySelector('.minutes')
let hoursCount = document.querySelector('.hours')
let daysCount = document.querySelector('.days')

function reduceCount(element) {
  element.innerText = element.innerText - 1
}

const startCounting = setInterval(() => {
  if(minutesCount.innerText > 0 && secondsCount.innerText == 0) {
    secondsCount.innerText = 60
    reduceCount(minutesCount)
  }
  if(hoursCount.innerText > 0 && minutesCount.innerText == 0) {
    minutesCount.innerText = 60
    reduceCount(hoursCount)
  }
  if(daysCount.innerText > 0 && hoursCount.innerText == 0) {
    hoursCount.innerText = 24
    reduceCount(daysCount)
  }
  if(minutesCount.innerText == 0 && secondsCount.innerText == 0 ) {
    clearInterval(startCounting)
    return
  }
  reduceCount(secondsCount)
}, 1000)
