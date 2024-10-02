// variables for buttons


let startStop = document.querySelector('#stopStartBtn')
let resetBtn = document.querySelector('#reserbtn')
let  = document.querySelector('#stopStartBtn')


//  Variables for time values 


let seconds = 0;
let minutes = 0 ;
let hours = 0;


//  varaibles for leading zero 

let leadSec = 0;
let leadMin = 0;
let leadHours = 0;

// varaibles for setInterval and timestatus 

let timerInterval = null;
let timerStatus = 'stopped'


// stop Watch Function 

function stopWatch() {

    seconds++

    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if (minutes / 60 === 1) {
            minutes = 0
            hours++;
        }
    }

    //  adjusting lead seconds 

    if(seconds < 10){
        leadSec = "0" + seconds.toString()
    }else{
        leadSec = seconds
    }  

    //  adjusting lead minutes 

    if(minutes < 10){
        leadMin = "0" + minutes.toString()
    }else{
        leadMin = minutes
    } 

    //  adjusting lead houes 

     if(hours < 10){
        leadHours = "0" + hours.toString()
    }else{
        leadHours = hours
    }


    let displayTimmer = document.getElementById('timer').innerText = 
    leadHours  + " : " + leadMin  + ' : ' + leadSec;
}


// window.setInterval(stopWatch ,1000)


startStop.addEventListener('click', function(){

    if(timerStatus === "stopped"){
        timerInterval = window.setInterval(stopWatch ,1000);
        startStop.innerHTML = `<i class="fa-solid fa-pause"  id="pause"></i>`
        timerStatus = 'started'
    }else{
        window.clearInterval(timerInterval)
        startStop.innerHTML = `<i class="fa-solid fa-play"  id="play"></i>`
        timerStatus = 'stopped'
    }
})


resetBtn.addEventListener('click' , function(){
    window.clearInterval(timerInterval)
    seconds = 0;
    minutes = 0;
    hours  = 0;

    document.getElementById('timer').innerHTML = "00 : 00 : 00"
    startStop.innerHTML = `<i class="fa-solid fa-play"  id="play"></i>`
        timerStatus = 'stopped'
})
