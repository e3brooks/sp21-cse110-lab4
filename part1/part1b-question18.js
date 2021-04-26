function repeatingTime() {
    let d = new Date();
    console.log(d.toLocaleTimeString());
}

setInterval(repeatingTime, 1000);