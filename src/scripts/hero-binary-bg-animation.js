function generateBinaryString(length) {
    let binaryString = "";
    for (let i = 0; i < length; i++) {
        binaryString += Math.round(Math.random());
    }
    return binaryString;
}

function addBinaryBg() {
    const heroBinaryBg = document.getElementById("hero-binary-bg");

    const charsPerLine = Math.floor(window.innerWidth / (18));
    const lines = Math.floor(window.innerHeight / (40));
    const estimatedChars = charsPerLine * lines * 5;

    heroBinaryBg.textContent = generateBinaryString(estimatedChars);
}

addBinaryBg(); 

setInterval(() => {
    addBinaryBg(); 
}, 1000);