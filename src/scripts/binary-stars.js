// yes this is vibecoded. no im still not ashamed

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('binary-stars-container');
    if (!container) return;

    const starCount = 150; // Number of stars

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('binary-star');

        // Randomly choose 0 or 1
        star.textContent = Math.random() > 0.5 ? '1' : '0';

        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;

        const size = Math.random() * 3.0 + 2.0; // 2.0rem to 5.0rem text size
        star.style.fontSize = `${size}rem`;

        const floatDistance = -1 * (size * 20);
        star.style.setProperty('--float-distance', `${floatDistance}px`);

        // Random animation duration and delay
        const flickerDuration = Math.random() * 3 + 2; // 2s to 5s
        const floatDuration = Math.random() * 10 + 10; // 10s to 20s
        const flickerDelay = Math.random() * 5;
        const floatDelay = Math.random() * 5;

        star.style.animationName = 'flicker, float';
        star.style.animationDuration = `${flickerDuration}s, ${floatDuration}s`;
        star.style.animationDelay = `${flickerDelay}s, ${floatDelay}s`;
        star.style.animationTimingFunction = 'ease-in-out, ease-in-out';
        star.style.animationIterationCount = 'infinite, infinite';

        container.appendChild(star);
    }
});
