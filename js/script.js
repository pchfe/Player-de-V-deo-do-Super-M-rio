// DOM
const video = document.querySelector('video');
const btnPlay = document.querySelector('#play');
const btnPause = document.querySelector('#pause');
const btnStop = document.querySelector('#stop');
const btnSpeed = document.querySelector('#acelerar');
const btnSlow = document.querySelector('#desacelerar');
const btnPlayTela = document.querySelector('.play-centro');
const btnVoltar = document.querySelector('.voltar');
const btnAvancar = document.querySelector('.avancar');

// EVENTS
playClicado = false;
pauseClicado = false;

btnPlay.addEventListener('click', ()=>{
    playClicado = true;
    video.play();
    video.playbackRate = 1;
    btnPlayTela.style.display = 'none';
    btnVoltar.style.display = 'none';
    btnAvancar.style.display = 'none';
});

btnPause.addEventListener('click', ()=>{
    pauseClicado = true;
    video.pause();
    btnPlayTela.style.display = 'inline';
    btnVoltar.style.display = 'inline';
    btnAvancar.style.display = 'inline';
});

btnStop.addEventListener('click', ()=>{
    video.pause();
    video.currentTime = 0;
    btnPlayTela.style.display = 'inline';
});

btnSpeed.addEventListener('click', ()=>{
    video.playbackRate += 0.25;
});

btnSlow.addEventListener('click', ()=>{
    video.playbackRate -= 0.25;
});

btnPlayTela.addEventListener('click', ()=>{
    video.play();
    video.playbackRate = 1;
    btnPlayTela.style.display = 'none';
    btnVoltar.style.display = 'none';
    btnAvancar.style.display = 'none';
});
btnAvancar.addEventListener('click', ()=>{
    video.currentTime += 10;
});
btnVoltar.addEventListener('click', ()=>{
    video.currentTime -= 10;
});


// video.addEventListener('click', ()=>{
//     video.requestFullscreen()
// })

function mostrarBotao() {
    if(playClicado){
        btnVoltar.style.display = "none";
        btnAvancar.style.display = "none";
    }
    btnVoltar.style.display = "inline";
    btnAvancar.style.display = "inline";
}  
function ocultarBotao() {
    if(!playClicado){
        btnVoltar.style.display = "inline";
        btnAvancar.style.display = "inline";
    }
    btnVoltar.style.display = "none";
    btnAvancar.style.display = "none";
}
function pausarVideo(){
    if(!pauseClicado){
        video.pause();
        btnPlayTela.style.display = 'inline';
        pauseClicado = false;
    } else{
        video.play();
        btnPlayTela.style.display = 'none';
        pauseClicado = true;
    }
}