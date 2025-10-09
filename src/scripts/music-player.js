function playMusic() {
    const audio = document.getElementById("music");
    const cd = document.getElementById("cd-image");

    if (audio.paused) {
        audio.volume = 0;
        audio.play();
        cd.classList.add("spinning");
        const fadeIn = setInterval(() => {
            if (audio.volume < 1) {
                audio.volume = Math.min(audio.volume + 0.025, 1);
            } else {
                clearInterval(fadeIn);
            }
        }, 100);
    } else {
        audio.pause();
        cd.classList.remove("spinning");
    }
}