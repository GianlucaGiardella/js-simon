//tomorrow
const endTime = new Date("2023-04-28T10:09:00").getTime()

//function
const x = setInterval(() => {
    //actual time
    const now = Date.now();

    //time remaining
    const difference = endTime - now;

    //convertion
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    //stop interval
    if (difference <= 0) {
        days = 0;
        hours = 0;
        minutes = 0;
        seconds = 0;
        clearInterval(x);
        document.querySelector(".time").innerHTML = "Che ci fai ancora qui...vai a lezione!";
    }

    //add in html
    document.querySelector(".time").innerHTML = `${days}D - ${hours}H - ${minutes}M - ${seconds}S`;
}, 1000);

