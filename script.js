function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
}

function hourHand(s) {
    s %= 43200; // seconds in 12 hours
    return ((360 * s / 43200) + 180) % 360;
}

function minuteHand(s) {
    s %= 3600; // seconds in an hour
    return ((6 * s / 60) + 180) % 360;
}

function secondHand(s) {
 s %= 60; // seconds in a minute
 return ((6 * s) + 180) % 360;
}

const hour = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

setInterval( () => {
    let s = getSecondsSinceStartOfDay();
    hour.style.transform = `rotate(${hourHand(s)}deg)`;
    minutes.style.transform = `rotate(${minuteHand(s)}deg)`;
    seconds.style.transform = `rotate(${secondHand(s)}deg)`;
}, 1000);