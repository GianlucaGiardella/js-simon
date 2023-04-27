//tomorrow
const endTime = new Date("2023-04-28T09:30:00").getTime()

//function
const x = setInterval(() => {
    //actual time
    const now = Date.now();

    //time remaining
    const difference = endTime - now;

    //convertion
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    //add in html
    document.querySelector(".time").innerHTML = `${days}D - ${hours}H - ${minutes}M - ${seconds}S`;

    //stop interval
    if (difference < 0) {
        clearInterval(x);
        document.querySelector(".time").innerHTML = "Che ci fai ancora qui...vai a lezione!";
    }
}, 1000);

