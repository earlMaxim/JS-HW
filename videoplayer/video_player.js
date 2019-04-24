


let video = document.querySelector(".video");
let play = document.querySelector(".play");
let pause = document.querySelector(".pause");




play.addEventListener('click', playVideo)
pause.addEventListener('click', pauseVideo)


console.log(video.duration)

function playVideo(){
    console.log('play')
    video.play();
    console.log(video.duration)
    percentVideo();
}

function pauseVideo(){
    console.log('pause')
    video.pause();
    percentVideo()
}


function percentVideo(){
    setTimeout(function run() {

        let percent =( video.currentTime / video.duration)*100 ;
        percent = percent.toFixed(0) + "%";
        document.querySelector(".duration").innerHTML = percent ;
    
        //рекурсивный вызов
        setTimeout(run, 100);
    }, 100);
}