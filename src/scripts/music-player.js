function playMusic() {
    const audio = document.getElementById("music");
    const cd = document.getElementById("cd-image");
    if (audio.paused) {
        audio.volume = 0.03;
        audio.play();
        cd.classList.add("spinning");
        light.style.backgroundColor = "#00ffaa";
        light.style.boxShadow = "0 0 4px #00ffaa";
        const fadeIn = setInterval(() => {
            if (audio.volume < 1) {
                audio.volume = Math.min(audio.volume + 0.02, 1);
            } else {
                clearInterval(fadeIn);
            }
        }, 100);
    } else {
        audio.pause();
        light.style.backgroundColor = "#1f2937";
        light.style.boxShadow = "0 0 4px #1f2937";
        cd.classList.remove("spinning");
    }
}