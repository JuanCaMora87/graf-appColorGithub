const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

const redInput = document.getElementById("redInput");
const greenInput = document.getElementById("greenInput");
const blueInput = document.getElementById("blueInput");

const colorPicker = document.getElementById("colorPicker");

const colorBox = document.getElementById("colorBox");
const rgbText = document.getElementById("rgbText");
const hexText = document.getElementById("hexText");

function rgbToHex(r, g, b) {
    return "#" +
        Number(r).toString(16).padStart(2, "0") +
        Number(g).toString(16).padStart(2, "0") +
        Number(b).toString(16).padStart(2, "0");
}

function updateAll(r, g, b) {
    const rgb = `rgb(${r}, ${g}, ${b})`;
    const hex = rgbToHex(r, g, b).toUpperCase();

    // Cuadro
    colorBox.style.backgroundColor = rgb;

    // Textos
    rgbText.textContent = `RGB(${r}, ${g}, ${b})`;
    hexText.textContent = hex;

    // Sliders
    red.value = r;
    green.value = g;
    blue.value = b;

    // Inputs
    redInput.value = r;
    greenInput.value = g;
    blueInput.value = b;

    // Color picker
    colorPicker.value = hex;
}

// Desde sliders
function fromSliders() {
    updateAll(red.value, green.value, blue.value);
}

// Desde inputs numéricos
function fromInputs() {
    let r = Math.min(255, Math.max(0, redInput.value));
    let g = Math.min(255, Math.max(0, greenInput.value));
    let b = Math.min(255, Math.max(0, blueInput.value));

    updateAll(r, g, b);
}

// Desde color picker
function fromColorPicker() {
    const hex = colorPicker.value;

    const r = parseInt(hex.substr(1, 2), 16);
    const g = parseInt(hex.substr(3, 2), 16);
    const b = parseInt(hex.substr(5, 2), 16);

    updateAll(r, g, b);
}

// Eventos
red.addEventListener("input", fromSliders);
green.addEventListener("input", fromSliders);
blue.addEventListener("input", fromSliders);

redInput.addEventListener("input", fromInputs);
greenInput.addEventListener("input", fromInputs);
blueInput.addEventListener("input", fromInputs);

colorPicker.addEventListener("input", fromColorPicker);

// Inicializar
updateAll(0, 0, 0);
