// countdown script

function declareUnknownRegistration() {
    document.getElementById("registration-flavor").innerText = "Registration isn't available yet.\nIf you're interested in participating, please fill out the interest form below to let us know!";

    document.getElementById("countdown-flavor").innerText = "";

    const button = document.getElementById("hero-button");
    button.children[0].innerText = "Interest Form";
    button.href = "https://docs.google.com/forms/d/e/1FAIpQLSez6g9QzUq1tzpaSi9LrTFv8y-Nh5fdbNsjmIJ4-5-RFDTUPg/viewform?usp=dialog";


}

function declareRegistrationClosed() {
    document.getElementById("registration-flavor").innerText = "Registration is now closed.\nSee you at the hackathon!";
    document.getElementById("countdown-flavor").innerText = "";

    const button = document.getElementById("hero-button");
    button.classList.add("!hidden");
}

function declareHackathonStarted() {
    document.getElementById("registration-flavor").innerText = "The Hackathon has started!\nGood luck to all participants!";
    document.getElementById("countdown-flavor").innerText = "";
    document.getElementById("countdown-block").classList.add("!hidden");

    const button = document.getElementById("hero-button");
    button.children[0].innerText = "Go to Dashboard";
    button.href = "https://today.hackncstate.org";
}

// default state is registration open (hardcoded in html). code below will call 
// above functions to change state if needed
// state will change ui

function updateCountdown() {
    const now = new Date().getTime();

    const distance = (now < registrationDeadline && registrationOpened ? registrationDeadline : startDate) - now;
    // if registration is closed, use startDate as the target
    // if registration is available, use registrationDeadline as the target as long as it's in the future

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");
    // const registerButton = document.getElementById("register-button");

    if (daysEl) daysEl.textContent = days < 10 ? "0" + days : days;
    if (hoursEl) hoursEl.textContent = hours < 10 ? "0" + hours : hours;
    if (minutesEl) minutesEl.textContent = minutes < 10 ? "0" + minutes : minutes;
    if (secondsEl) secondsEl.textContent = seconds < 10 ? "0" + seconds : seconds;
}

const now = new Date().getTime();

if (now > startDate) {
    declareHackathonStarted();
} else {
    if (now > registrationDeadline) {
        declareRegistrationClosed();
    } else if (!registrationOpened) {
        declareUnknownRegistration();
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
}

