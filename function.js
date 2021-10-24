var fm = document.getElementById("f-minute");
var fs = document.getElementById("f-second");

var bm = document.getElementById("b-minute");
var bs = document.getElementById("b-second");

var start = document.getElementById("button")
var timer;

var counting = document.getElementById("counting");


function setMode(mode){
    if (mode==true){
        setInterval(Timer,1000);
        console.log(mode);
    }
    else if(mode==false){
        window.location.reload();
    }
    save(document.getElementById("textarea").value);
    console.log(document.getElementById("textarea").value);
}


// function myPlayFunction(){
//     document.getElementById("svg-outer-circle").style.animationPlayState = "running";
//     document.getElementById("svg-outer-circle2").style.animationPlayState = "paused";
//     setTimeout(function() {
//         document.getElementById("svg-outer-circle").style.animationPlayState = "paused";
//         document.getElementById("svg-outer-circle2").style.animationPlayState = "running";
//     },3000);
//     save();
// }
// var play = temp;
// take();

// take(document.getElementById("textarea").value);

// function info( textarea ){
//     this.textarea = textarea;
// };

// function save() {
//     let Session = 123;
//     const session = new info ( document.getElementById("textarea").value );
//     localStorage.setItem( Session , JSON.stringify(session) );
// };

// function take() {
//     let Session = 123;
//     let information = JSON.parse(localStorage.getItem(Session));
//     document.getElementById("textarea").value = information.textarea;
//     console.log(information);
// };







// var a = 0



// counting fucntion
function Timer(){

    // focus timer
    if(  fs.innerText!=0 ){
        fs.innerText = fs.innerText - 1;
    } 
    else if( fm.innerText!=0 && fs.innerText==0 ){
        fs.innerText = 59;
        fm.innerText = fm.innerText - 1;
    }

    //break timer
    if( fm.innerText==0 && fs.innerText==0 ){
        if(  bs.innerText!=0 ){
            bs.innerText = bs.innerText - 1;
        } 
        else if( bm.innerText!=0 && bs.innerText==0 ){
            bs.innerText = 59;
            bm.innerText = bm.innerText - 1;
        }
        else{
            
        }
    }

    if(fm.innerText == 0 && fs.innerText == 0 && bm.innerText == 0 && bs.innerText == 0){
        fm.innerText = "25";
        fs.innerText = "00";

        bm.innerText = "5";
        bs.innerText = "00";

        counting.innerText = -((-counting.innerText) - 1) ;
        document.getElementById("Ft").innerText = counting.innerText*25;
        document.getElementById("Bt").innerText = counting.innerText*5;
    }
}











function thisVolume1(volume_value){
    var myvideo = document.getElementById("one");
    myvideo.volume = volume_value / 100;
};    

function thisVolume2(volume_value2){
    var two = document.getElementById("two");
    two.volume = volume_value2 / 100;
};    

function thisVolume3(volume_value){
    var myvideo = document.getElementById("three");
    myvideo.volume = volume_value / 100;
};    

function thisVolume4(volume_value){
    var myvideo = document.getElementById("four");
    myvideo.volume = volume_value / 100;
};    

function thisVolume5(volume_value){
    var myvideo = document.getElementById("five");
    myvideo.volume = volume_value / 100;
};    

function thisVolume6(volume_value){
    var myvideo = document.getElementById("six");
    myvideo.volume = volume_value / 100;
};    
      

// player play, pause

var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var button1 = document.getElementById("button1")
var button2 = document.getElementById("button2")
var button3 = document.getElementById("button3")
var button4 = document.getElementById("button4")
var button5 = document.getElementById("button5")
var button6 = document.getElementById("button6")

button1.addEventListener("click",function(){
    if (one.paused){
        one.play();}
    else{one.pause();}
    console.log(1);
});

button2.addEventListener("click",function(){
    if (two.paused){
        two.play();}
    else{two.pause();}
    console.log(2);
});

button3.addEventListener("click",function(){
    if (three.paused){
        three.play();}
    else{three.pause();}
    console.log(3);
});

button4.addEventListener("click",function(){
    if (four.paused){
        four.play();}
    else{four.pause();}
    console.log(4);
});

button5.addEventListener("click",function(){
    if (five.paused){
        five.play();}
    else{five.pause();}
    console.log(5);
});

button6.addEventListener("click",function(){
    if (six.paused){
        six.play();}
    else{six.pause();}
    console.log(6);
});

