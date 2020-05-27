// Keydown and play sound
window.addEventListener('keydown', (e) => {
    // Play audio
    const audioElement = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const btn = document.querySelector(`div[data-key="${e.keyCode}"]`);

    // If no audio present corresponding to the key pressed
    if (!audioElement) {
        return;
    }

    // To reset time
    audioElement.currentTime = 0;

    // Play the audio
    audioElement.play();

    // Increase size of div
    btn.classList.add("playing");
});

// Click button and play sound
const onClickHandler = (dataKey) => {
    const audioElement = document.querySelector(`audio[data-key="${dataKey}"]`);
    const btn = document.querySelector(`div[data-key="${dataKey}"]`);

    // If no audio present corresponding to the key pressed
    if (!audioElement) {
        return;
    }

    // To reset time
    audioElement.currentTime = 0;

    // Play the audio
    audioElement.play();

    // Increase size of div
    btn.classList.add("playing");
}

// Unique variables for buttons
const btn_A = document.querySelector('#a');
const btn_S = document.querySelector('#s');
const btn_D = document.querySelector('#d');
const btn_F = document.querySelector('#f');
const btn_G = document.querySelector('#g');
const btn_H = document.querySelector('#h');
const btn_J = document.querySelector('#j');
const btn_K = document.querySelector('#k');
const btn_L = document.querySelector('#l');

// OnClick event listeners
btn_A.addEventListener('click', (e) => {
    const dataKey = btn_A.getAttribute('data-key');
    onClickHandler(dataKey);
});
btn_S.addEventListener('click', (e) => {
    const dataKey = btn_S.getAttribute('data-key');
    onClickHandler(dataKey);
});
btn_D.addEventListener('click', (e) => {
    const dataKey = btn_D.getAttribute('data-key');
    onClickHandler(dataKey);
});
btn_F.addEventListener('click', (e) => {
    const dataKey = btn_F.getAttribute('data-key');
    onClickHandler(dataKey);
});
btn_G.addEventListener('click', (e) => {
    const dataKey = btn_G.getAttribute('data-key');
    onClickHandler(dataKey);
});
btn_H.addEventListener('click', (e) => {
    const dataKey = btn_H.getAttribute('data-key');
    onClickHandler(dataKey);
});
btn_J.addEventListener('click', (e) => {
    const dataKey = btn_J.getAttribute('data-key');
    onClickHandler(dataKey);
});
btn_K.addEventListener('click', (e) => {
    const dataKey = btn_K.getAttribute('data-key');
    onClickHandler(dataKey);
});
btn_L.addEventListener('click', (e) => {
    const dataKey = btn_L.getAttribute('data-key');
    onClickHandler(dataKey);
});

// Remove playing class after transition ends
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
};

// To Sync JS with CSS
const btns = document.querySelectorAll('.btn');
btns.forEach(btn => btn.addEventListener('transitionend', removeTransition));

// DO NOT DO THIS: TO SYNC JS WITH CSS
/*
setTimeout(() => {
document.querySelector(`div[data-key="${e.keyCode}"]`).classList.remove("playing");
}, 190);
*/