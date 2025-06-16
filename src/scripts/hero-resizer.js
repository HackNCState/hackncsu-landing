// this silly bit of code that i definitely wrote (i did not copy it)
// is to make the hero section's height responsive to the viewport height
// only on large screens since you can like, adjust the window size and stuff

// we dont want that on mobile because the browser ui (address bar) will take up space
// but disappear when you scroll down which will make the hero section update
// therefore making the site scroll weirdly
// so we just avoid updating the height on small screens after the initial load

// most of it is just to revert back to large screen behavior
// on the off chance someone on PC 
// loads the page on a small window and then resizes it to large

// is it nitpicky? yes but i do not care about you or your feelings
// its not like this will use up any resources or anything

const mdBreakpoint = 768; // tailwind's default md breakpoint
const heroElement = document.getElementById("hero");
let initialHeroHeightSet = false;

function adjustHeroHeight() {
    if (!heroElement) return;

    if (window.innerWidth < mdBreakpoint) {
        if (!initialHeroHeightSet && heroElement.classList.contains('h-dvh')) {
            const currentHeight = heroElement.offsetHeight;
            heroElement.style.height = `${currentHeight}px`;
            heroElement.classList.remove("h-dvh");
            initialHeroHeightSet = true;
        } else if (initialHeroHeightSet && heroElement.style.height === '') {
            const currentHeight = heroElement.offsetHeight;
            heroElement.style.height = `${currentHeight}px`;
            heroElement.classList.remove("h-dvh");
        }
    } else {
        if (!heroElement.classList.contains('h-dvh')) {
            heroElement.classList.add("h-dvh");
        }
        if (heroElement.style.height !== '') {
            heroElement.style.height = '';
        }
        initialHeroHeightSet = false;
    }
}

window.addEventListener('load', adjustHeroHeight);

let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(adjustHeroHeight, 100);
});