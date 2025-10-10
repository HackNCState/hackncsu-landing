(function() {
    // Create a spotlight div that will follow the cursor
    const spotlight = document.createElement('div');
    spotlight.id = 'flashlight-spotlight';
    document.body.appendChild(spotlight);

    // Create a custom cursor image element
    const cursorImg = document.createElement('img');
    cursorImg.id = 'flashlight-cursor-img';
    cursorImg.src = 'assets/img/flashlight_cursor.png';
    cursorImg.alt = 'flashlight cursor';
    document.body.appendChild(cursorImg);

    // Track mouse position
    let mouseX = 0;
    let mouseY = 0;

    // Update spotlight and cursor position on mouse move
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Update spotlight position
        spotlight.style.left = mouseX + 'px';
        spotlight.style.top = mouseY + 'px';
        
        // Update cursor image position
        cursorImg.style.left = mouseX + 'px';
        cursorImg.style.top = mouseY + 'px';
    });

    // Hide custom cursor when mouse leaves the window
    document.addEventListener('mouseleave', () => {
        cursorImg.style.display = 'none';
        spotlight.style.display = 'none';
    });

    // Show custom cursor when mouse enters the window
    document.addEventListener('mouseenter', () => {
        cursorImg.style.display = 'block';
        spotlight.style.display = 'block';
    });
})();

