let h1 = document.querySelector('h1'),
    startBtn = document.querySelector('.startBtn'),
    stopBtn = document.querySelector('.stopBtn'),
    resetBtn = document.querySelector('.resetBtn'),
    second = 0,
    minute = 0,
    hour = 0,
    sekundomer;

h1.innerHTML = `${hour}:${minute}:${second}`;
startBtn.onclick = () => {
    sekundomer = setInterval(() => {
        second += 1;
        if (second == 60) {
            minute += 1;
            second = 0;
        }
        if (minute == 60) {
            hour += 1;
            minute = 0;
        }
        h1.innerHTML = `${hour}:${minute}:${second}`;
    }, 100)
}

stopBtn.onclick = () => {
    clearInterval(sekundomer)
}
resetBtn.onclick = () => {
    clearInterval(sekundomer)
    second = 0;
    minute = 0;
    hour = 0;
    h1.innerHTML = `${hour}:${minute}:${second}`;
}