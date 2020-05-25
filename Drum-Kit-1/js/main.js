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



function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
};

const btns = document.querySelectorAll('.btn');
btns.forEach(btn => btn.addEventListener('transitionend', removeTransition));



// DO NOT DO THIS: TO SYNC JS WITH CSS
/*
setTimeout(() => {
document.querySelector(`div[data-key="${e.keyCode}"]`).classList.remove("playing");
}, 190);
*/

