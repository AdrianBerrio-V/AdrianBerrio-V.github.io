document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('backgroundMusic');
    const penguins = [
        document.getElementById('penguin1'),
        document.getElementById('penguin2'),
        document.getElementById('penguin3'),
        document.getElementById('penguin4')
    ];
    const songs = [
        '../music/hb-infantil.m4a',
        '../music/hb-vallenato.m4a',
        '../music/hb-reggaeton.mp3',
        '../music/besos-limon-miel.m4a'
    ];
    let currentSong = 3;

    function playSong(index) {
        audio.src = songs[index];
        audio.play().catch(() => {});
    }

    penguins.forEach((penguin, idx) => {
        penguin.addEventListener('click', () => {
            currentSong = idx;
            playSong(currentSong);
        });
    });

    playSong(currentSong);

    // Modal
    const message = document.getElementById("myWindow");
    const btn = document.getElementById("openWindow");
    const close = document.querySelector(".close");

    btn.addEventListener('click', () => {
        message.style.display = "flex";
        document.body.style.overflow = "hidden";
    });

    close.addEventListener('click', () => {
        message.style.display = "none";
        document.body.style.overflow = "";
    });

    close.addEventListener('keydown', (e) => {
        if (e.key === "Enter" || e.key === " ") {
            message.style.display = "none";
            document.body.style.overflow = "";
        }
    });

    window.addEventListener('click', function(event) {
        if (event.target == message) {
            message.style.display = "none";
            document.body.style.overflow = "";
        }
    });

    // Música: silenciar/reanudar
    const stopBtn = document.getElementById('stopMusic');
    stopBtn.addEventListener('click', function() {
        if (!audio.paused) {
            audio.pause();
            stopBtn.textContent = "🔇";
        } else {
            audio.play();
            stopBtn.textContent = "🎵";
        }
    });

    // Animación de texto
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
});