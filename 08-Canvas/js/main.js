const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

// Set height and width of canvas same as window

// canvas.height = window.innerHeight;
// canvas.width = window.innerWidth;


// StrokeStyle -> Any colour
// lineJoin -> round, bevel, miter
// lineCap -> butt, round, square

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 1;


// Keeping track
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let direction = true;

// For rainbow colours
let hue = 0;


// To draw line stroke
const draw = (e) => {
    if (!isDrawing) return;

    // For rainbow
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

    // Begin
    ctx.beginPath();

    // Start from
    ctx.moveTo(lastX, lastY);

    // End at
    ctx.lineTo(e.offsetX, e.offsetY);

    ctx.stroke();

    // Update
    [lastX, lastY] = [e.offsetX, e.offsetY];

    // To change colour
    hue++;

    // Reset
    if (hue >= 360) {
        hue = 0;
    }


    if (ctx.lineWidth > 100 || ctx.lineWidth <= 1) {
        direction = !direction;
    }

    if (direction) ctx.lineWidth++;
    else ctx.lineWidth--;

}



canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

