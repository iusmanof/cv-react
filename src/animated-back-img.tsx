export default function animatedBackImage(): void {
    let pointerX = -1;
    let pointerY = -1;

    document.onmousemove = function (event) {
        pointerX = event.pageX;
        pointerY = event.pageY;
    };
    setInterval(pointerCheck, 1000);
    function pointerCheck() {
        console.log("Cursor at: " + pointerX + ", " + pointerY);
    }
}
