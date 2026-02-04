document.addEventListener("DOMContentLoaded", () => {

    const red = document.getElementById("red");
    const green = document.getElementById("green");
    const blue = document.getElementById("blue");

    const redNum = document.getElementById("redNum");
    const greenNum = document.getElementById("greenNum");
    const blueNum = document.getElementById("blueNum");

    const colorPicker = document.getElementById("colorPicker");
    const colorBox = document.getElementById("colorBox");
    const hexCode = document.getElementById("hexCode");

    function clamp(v) {
        return Math.min(255, Math.max(0, v));
    }

    function rgbToHex(r, g, b) {
        return (
            "#" +
            r.toString(16).padStart(2, "0") +
            g.toString(16).padStart(2, "0") +
            b.toString(16).padStart(2, "0")
        ).toUpperCase();
    }

    function hexToRgb(hex) {
        return {
            r: parseInt(hex.substring(1, 3), 16),
            g: parseInt(hex.substring(3, 5), 16),
            b: parseInt(hex.substring(5, 7), 16)
        };
    }

    function update(r, g, b) {
        r = clamp(r);
        g = clamp(g);
        b = clamp(b);

        red.value = r;
        green.value = g;
        blue.value = b;

        redNum.value = r;
        greenNum.value = g;
        blueNum.value = b;

        const hex = rgbToHex(r, g, b);
        colorPicker.value = hex;
        colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        hexCode.textContent = hex;
    }

    red.addEventListener("input", () => update(+red.value, +green.value, +blue.value));
    green.addEventListener("input", () => update(+red.value, +green.value, +blue.value));
    blue.addEventListener("input", () => update(+red.value, +green.value, +blue.value));

    redNum.addEventListener("input", () => update(+redNum.value, +green.value, +blue.value));
    greenNum.addEventListener("input", () => update(+red.value, +greenNum.value, +blue.value));
    blueNum.addEventListener("input", () => update(+red.value, +green.value, +blueNum.value));

    colorPicker.addEventListener("input", () => {
        const { r, g, b } = hexToRgb(colorPicker.value);
        update(r, g, b);
    });

    update(0, 0, 0);
});
