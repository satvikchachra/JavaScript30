const pressed = [];
const secretCode = 'satvik';

window.addEventListener('keyup', (e) => {
    pressed.push(e.key);
    let lastIdx = -pressed.length - 1;
    let reqIdx = pressed.length - secretCode.length;
    pressed.splice(lastIdx, reqIdx);
    if (pressed.join('').toLowerCase() == secretCode) {
        console.log('ding! ding!');
        cornify_add();
    }
});

    