let windows = [];
let startPoint = {
    x: 0,
    y: 0
}
let span = {
    x: 100,
    y: 50
}
function show() {
    let w = window.open("", "", `width=200,height=250,top=${startPoint.y},left=${startPoint.x}`);
    w.document.write(`
        <body style="background: ${getColor()}">
            <h1>Window №${windows.length + 1}</h1>
        </body>
    `)
    windows.push(w);
    startPoint.x += span.x;
    startPoint.y += span.y;
}
function exit() {
    let w = windows.pop();
    if (w) {
        w.close();
    }
}
function changeSize() {
    let w = windows[windows.length - 1];
    if (w) {
        w.resizeTo(getNumber(screen.width - 200, 100), getNumber(screen.height - 200, 100));
    }
}
function changePlace() {
    let w = windows[windows.length - 1];
    if (w) {
        let x = (screen.width - w.outerWidth) / 2;
        let y = (screen.height - w.outerHeight) / 2;
        w.moveTo(x, y);
    }
}