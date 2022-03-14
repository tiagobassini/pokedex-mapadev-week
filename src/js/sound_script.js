



(function () {
    let audio = new Audio("src/som/01 Opening (part 1).mp3");
    audio.volume = 0.02;
    audio.play();
    audio.addEventListener("ended", function () {
        nextMusic();
    }, true);
})();

function nextMusic() {

    let audio = new Audio("src/som/02 Opening (part 2).mp3");
    audio.volume = 0.02;
    audio.loop = true;
    audio.play();
}

