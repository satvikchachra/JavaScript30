// Array of video lengths
const timeNodes = ["5:43", "2:33", "3:45", "0:47", "5:21", "6:56", "3:46", "5:25", "3:14", "3:31", "5:59", "3:07", "11:29", "8:57", "5:49", "5:52", "5:50", "9:13", "11:51", "7:58", "4:40", "4:45", "6:46", "7:24", "7:12", "5:23", "3:34", "8:22", "5:17", "3:10", "4:43", "19:43", "0:47", "0:47", "3:14", "3:59", "2:43", "4:17", "6:56", "3:05", "2:06", "1:59", "1:49", "3:36", "7:10", "3:44", "3:44", "4:36", "3:16", "1:10", "6:10", "2:14", "3:44", "5:05", "6:03", "12:39", "1:56", "4:04"];

// Convert strings to numbers then to seconds and calculate sum of array
const seconds = timeNodes
    .map(timeNode => {
        const [min, sec] = timeNode.split(':').map(parseFloat);
        return ((min * 60) + sec);
    })
    .reduce((total, vidSeconds) => total + vidSeconds);

// Display UI
const list = document.querySelector('.list-group');

list.innerHTML = timeNodes.map((timeNode, index) => `<li class="list-group-item">
<div>
    <div class="video-container">

    <div class="image-container d-inline pr-3">
        <img class="thumbnail" src="assets/thumbnail.jpg">
    </div>
    <div class="video-description">
        <div class="video-title">Learn Redux #${index}</div>
        <div class="video-creator disable">By satvikchachra</div>
        <div class="video-length disable">Length: <kbd>${timeNode}</kbd></div>
    </div>

    </div>
</div>

</li>`).join(' ');

// Calculate hours, minutes and seconds
let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

// On button click
document.querySelector('#result-btn').addEventListener('click', () => {
    alert(`Total Course Length : ${hours} Hours ${mins} Minutes ${secondsLeft} Seconds`);
});