let c = (el) => document.querySelector(el);
let cs = (el) => document.querySelectorAll(el);

let digitalElement = c('.digital');
let sElement = c('.p_s');
let mElement = c('.p_m');
let hElement = c('.p_h');


const upDateClock = () => {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    let sDeg = ((360 / 60) * second) - 90;
    let mDeg = ((360 / 60) * minute) - 90;
    let hDeg = ((360 / 12) * hour) - 90;

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
}

const fixZero = (time) => {
    return time < 10 ? `0${time}` : `${time}`;
}

setInterval(upDateClock, 1000);
upDateClock();