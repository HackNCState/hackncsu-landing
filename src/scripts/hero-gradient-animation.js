// i ai generated this i have no shame

const heroGradientElement = document.getElementById('hero-gradient'); // Renamed for clarity
const gradientColorFrom = 'var(--color-gray-700)'; 
const gradientColorTo = 'var(--color-black)';     
let animatedGradientAngle = 0;

function animateHeroGradientAngle() {
    if (heroGradientElement) {
        animatedGradientAngle += 0.5; // adjust speed of rotation
        if (animatedGradientAngle >= 360) {
            animatedGradientAngle -= 360; //
        }

        heroGradientElement.style.backgroundImage = `linear-gradient(${animatedGradientAngle}deg, ${gradientColorFrom}, ${gradientColorTo})`;
    }
    requestAnimationFrame(animateHeroGradientAngle);
}

if (heroGradientElement) {
    requestAnimationFrame(animateHeroGradientAngle);
}