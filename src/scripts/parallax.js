// Parallax scrolling effect
document.addEventListener('DOMContentLoaded', function () {
    const parallaxContainer = document.getElementById('parallax-container');
    const parallaxLayers = document.querySelectorAll('.parallax-layer');

    if (!parallaxContainer || parallaxLayers.length === 0) return;

    // Calculate and set container height to cover entire page
    function setContainerHeight() {
        const documentHeight = document.documentElement.scrollHeight;

        // Set container height to document height to ensure full coverage
        parallaxContainer.style.height = `${documentHeight}px`;
    }

    function updateParallax() {
        const scrolled = window.pageYOffset;

        parallaxLayers.forEach(layer => {
            const speed = parseFloat(layer.getAttribute('data-speed')) || 0.5;
            const offset = parseFloat(layer.getAttribute('data-offset')) || 0;
            const yPos = offset + (-scrolled * speed);
            layer.style.transform = `translateY(${yPos}px)`;
        });
    }

    // Initialize container height
    setContainerHeight();
    updateParallax();

    let ticking = false;
    window.addEventListener('scroll', function () {
        if (!ticking) {
            window.requestAnimationFrame(function () {
                updateParallax();
                ticking = false;
            });
            ticking = true;
        }
    });

    window.addEventListener('resize', function () {
        setContainerHeight();
        updateParallax();
    });
});
