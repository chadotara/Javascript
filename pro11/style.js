let progress =document.getElementById('progress');
let song = document.getElementById('song');
let ctrIcon =document.getElementById('ctrIcon');


song.onloadedmetadata = function(){
    progress.max =  song.duration;
    progress.value = song.currentTime;


}


function playPause(){
    if (ctrIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrIcon.classList.remove("fa-pause");
        ctrIcon.classList.add("fa-play");
    }else{
        song.play();
        ctrIcon.classList.remove("fa-play")
        ctrIcon.classList.add("fa-pause");
    }
}


if (song.play()) {
    setInterval(() => {
        progress.value =song.currentTime
    }, 500);
    
}
progress.onchange = function(){
     song.play()
     song.currentTime = progress.value;
     ctrIcon.classList.add('fa-pause');
     ctrIcon.classList.remove('fa-play')
}

