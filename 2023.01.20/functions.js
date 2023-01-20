function getNumber(a = 101, b = 0) {
    return Math.floor(Math.random() * (a - b) + b);
}

function getColor() {
    let r = getNumber(256),
        g = getNumber(256),
        b = getNumber(256);
    return `rgb(${r},${g},${b})`;
}