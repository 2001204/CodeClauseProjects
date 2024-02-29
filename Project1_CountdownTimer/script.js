
const eventDate = new Date("2024-03-10T22:50:59").getTime();

const countdown = setInterval(function() {

    
    const now = new Date().getTime();

   
    const timeRemaining = eventDate - now;

    
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    
    document.getElementById("timer").innerHTML = `
        ${days} ::  ${hours} : ${minutes} : ${seconds} 
    `;

    if (timeRemaining < 0) {
        clearInterval(countdown);
        document.getElementById("timer").innerHTML = "Countdown expired!";
    }

    
}, 1000);

