let n = 0;
let w;

function getNumber(a = 101, b = 0) {
    return Math.floor(Math.random() * (a - b) + b);
}

function clk() {
    console.log(`click ${++n} times`);
}

function show() {
    // window.open("https://wikipedia.org", "_self");
    w = window.open("", null, `width=${getNumber(1000, 100)},height=${getNumber(800, 100)},top=100,left=100`);
}
function exit() {
    if (w) {
        w.close();
    }
}
function changeSize() {
    if (w) {
        // w.resizeBy(100, 20);
        w.resizeTo(getNumber(screen.width - 200, 100), getNumber(screen.height - 200, 100));
    }
}
function changePlace() {
    if (w) {
        // w.moveBy(100, 10);
        // Поместить в середину экрана window
        let x = (screen.width - w.outerWidth) / 2;
        let y = (screen.height - w.outerHeight) / 2;
        w.moveTo(x, y);
    }
}

/*
* focus()
* blur()
* */