
document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('backgroundMusic');
    var penguin1 = document.getElementById('penguin1');
    var penguin2 = document.getElementById('penguin2');
    var penguin3 = document.getElementById('penguin3');
    var penguin4 = document.getElementById('penguin4');
    var currentSong = 3;
    var songs = [
        '../music/hb-infantil.m4a',
        '../music/hb-vallenato.m4a',
        '../music/hb-reggaeton.mp3',
        '../music/besos-limon-miel.m4a'
    ];

    function playSong(index) {
        audio.src = songs[index];
        audio.play().catch(error => {
            console.log("Error al reproducir: ", error);
        });
    }

    penguin1.addEventListener('click', function() {
        currentSong = 0;
        playSong(currentSong);
    });

    penguin2.addEventListener('click', function() {
        currentSong = 1;
        playSong(currentSong);
    });

    penguin3.addEventListener('click', function() {
        currentSong = 2;
        playSong(currentSong);
    });

    penguin4.addEventListener('click', function() {
        currentSong = 3;
        playSong(currentSong);
    });

    playSong(currentSong);

});


document.getElementById('stopMusic').addEventListener('click', function() {
    var audio = document.getElementById('backgroundMusic');
    if (!audio.paused) {
        audio.pause();
    } else {
        audio.play();
    }
});

document.querySelector('.birthday-message').classList.add('animate-text');

const text = document.querySelector('.birthday-message');
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

text.addEventListener('mouseover', function() {
    text.querySelectorAll('span').forEach((char, i) => {
        setTimeout(() => {
            char.classList.add('hover');
        }, i * 50);
    });
});

text.addEventListener('mouseout', function() {
    text.querySelectorAll('span').forEach((char, i) => {
        setTimeout(() => {
            char.classList.remove('hover');
        }, i * 50);
    });
});


//Window

var message = document.getElementById("myWindow");
var btn = document.getElementById("openWindow");
var close = document.getElementsByClassName("close")[0];

btn.addEventListener('click', function() {
    message.style.display = "block";
});

close.addEventListener('click', function() {
    message.style.display = "none";
});

window.addEventListener('click', function(event) {
    if (event.target == message) {
        message.style.display = "none";
    }
});