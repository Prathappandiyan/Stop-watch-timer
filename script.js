const btnstart=document.querySelector('.start');
const btnstop=document.querySelector('.stop');
const btnreset=document.querySelector('.reset');

let hrs=min=sec=ms=0,startTimer;///default value all variable

btnstart.addEventListener('click',()=>{
    btnstart.classList.add('start-active')
    btnstop.classList.remove('stop-active')


    startTimer=setInterval(()=>{
        ms++;;
        if(ms==100){
            sec++;//increment sec=sec+1
            ms=0;
        }
        if(sec==60){
            min++;//increment min=min+1
            sec=0
        }
        if(min==60){
            hrs++;//increment hrs=hrs+1
            min=0;
        }
        updatedisplay()
    },10)
})

btnstop.addEventListener('click',()=>{
    clearInterval(startTimer);
    btnstart.classList.remove('start-active')
    btnstop.classList.add('stop-active')
    
})

btnreset.addEventListener('click',()=>{
    let hrs=min=sec=ms=0;
    clearInterval(startTimer);
    btnstop.classList.remove('stop-active')
    btnstart.classList.remove('start-active')

    updatedisplay()

})

function updatedisplay(){
    phrs=hrs<10?'0'+hrs:hrs
    pmin=min<10?'0'+min:min
    psec=sec<10?'0'+sec:sec
    pms=ms<10?'0'+ms:ms

    document.querySelector('.hrs').innerText=phrs;
    document.querySelector('.min').innerText=pmin;
    document.querySelector('.sec').innerText=psec;
    document.querySelector('.ms').innerText=pms;

}



