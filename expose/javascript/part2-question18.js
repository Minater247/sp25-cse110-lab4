function logTimeRepeatedly() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(logTimeRepeatedly, 1000);