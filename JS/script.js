let secondHand = document.querySelector('.second-hand');
let minuteHand = document.querySelector('.minute-hand');
let hourHand = document.querySelector('.hour-hand');
clockTick = () => {
    const timeNow = new Date();
    let seconds = timeNow.getSeconds();
    let minutes = timeNow.getMinutes();
    let hours = timeNow.getHours();
    let secondHandDegrees = (seconds / 60) * 360 + 90;
    let minuteHandDegrees = (minutes / 60) * 360 + 90;
    let hourHandDegrees = (hours / 60) * 360 + 90;
    secondHand.style.transform = `rotate(${secondHandDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteHandDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourHandDegrees}deg)`;
    console.log(seconds + 's' + minutes + 'm' + hours + 'h');
  }
setInterval(clockTick, 1000);
