const secondHand = document.querySelector('.sec-hand'),
minuteHand = document.querySelector('.minute-hand'),
hourHand = document.querySelector('.hour-hand')

const updateTime = () => {
    const date = new Date,
    second = date.getSeconds(),
    minute = date.getMinutes(),
    hour = date.getHours()
    secondHand.style.transform = `rotate(${second * 6 + 270}deg)`
    minuteHand.style.transform = `rotate(${minute * 6 + 270}deg)`
    hourHand.style.transform = `rotate(${hour * 30 + 270}deg)`
}

updateTime()
setInterval(updateTime, 1000)