const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

const setDate = () => {

    // Get Date
    const date = new Date();

    const sec = date.getSeconds(); // Get current second
    const min = date.getMinutes(); // Get current minute
    const hr = date.getHours(); // Get current hour

    // Since offset second hand div value is 90 degrees
    const secDegrees = ((sec / 60) * 360) + 90;
    const minDegrees = ((min / 60) * 360) + 90;
    const hourDegrees = ((hr / 12) * 360) + 90;


    secondHand.style.transform = `rotate(${secDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}

setInterval(setDate, 1000);
