let min = document.querySelector('.main__set-minutes');
let sec = document.querySelector('.main__set-seconds');
let hour = document.querySelector('.main__set-hours');

// console.log(min);
// console.log(sec);
// console.log(hour);

function clock() {
    let time = new Date(),
        seconds = time.getSeconds(),
        minutes = time.getMinutes(),
        hours = time.getHours();

    setTimeout(() => clock(), 1000);

    min.innerHTML = minutes;
    sec.innerHTML = seconds;
    hour.innerHTML = hours;
}

clock()