function playMusic() {
    const audio = document.getElementById("music");
    const cd = document.getElementById("cd-image");

    if (audio.paused) {
        audio.volume = 0.03;
        audio.play();
        cd.classList.add("spinning");
        light.style.backgroundColor = "limegreen";
        light.style.boxShadow = "0 0 4px limegreen";
        const fadeIn = setInterval(() => {
            if (audio.volume < 1) {
                audio.volume = Math.min(audio.volume + 0.0025, 1);
            } else {
                clearInterval(fadeIn);
            }
        }, 100);
    } else {
        audio.pause();
        light.style.backgroundColor = "red";
        light.style.boxShadow = "0 0 4px red";
        cd.classList.remove("spinning");
    }
}