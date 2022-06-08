function timer() {
    countingDown = setInterval(() => {
      secondsCount.innerText = secondsCount.innerText - 1
      if (secondsCount.innerText <= 0) {
        clearInterval(countingDown)
        console.log(secondsCount.innerText)
        if(minutesCount.innerText > 0) {
        minutesCount.innerText = minutesCount.innerText - 1
        }
        if(minutesCount.innerText > 0) {
          secondsCount.innerText = 10
        }
        if(minutesCount.innerText === 0) {
          secondsCount.innerText = 10
          countingDown = setInterval(() => {
            if(secondsCount.innerText <=0) {
              clearInterval(countingDown)
              return
            }
            secondsCount.innerText = secondsCount.innerText - 1
          })
        }
        if(secondsCount.innerText > 0 && minutesCount.innerText >= 0) {
          timer()
        }
      }
    }, 1000)
  }
  
  if (secondsCount.innerText > 0 && secondsCount.innerText < 60) {
    countingDown = setInterval(() => {
      if (secondsCount.innerText <= 0) {
        clearInterval(countingDown)
        console.log(secondsCount.innerText)
        minutesCount.innerText = minutesCount.innerText - 1
        secondsCount.innerText = 10
        if (secondsCount.innerText > 0) {
          timer()
        }
      }
      secondsCount.innerText = secondsCount.innerText - 1
      console.log(secondsCount.innerText)
    }, 1000)
  }
  