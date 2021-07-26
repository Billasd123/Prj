var rain = document.getElementById("rain");
var wind = document.getElementById("wind");
var fire = document.getElementById("fire");
var forest = document.getElementById("forest");
var sea = document.getElementById("sea");
var thunder = document.getElementById("thunder");

const rainButton = document.getElementById("rainButton");
const windButton = document.getElementById("windButton");
const fireButton = document.getElementById("fireButton");
const forestButton = document.getElementById("forestButton");
const seaButton = document.getElementById("seaButton");
const thunderButton = document.getElementById("thunderButton");


rainButton.addEventListener("click",function(){
    if (rain.paused){
        rain.play();}
    else{rain.pause();}
});


windButton.addEventListener("click",function(){
    if (wind.paused){
        wind.play();}
    else{wind.pause();}
});

fireButton.addEventListener("click",function(){
    if (fire.paused){
        fire.play();}
    else{fire.pause();}
});

forestButton.addEventListener("click",function(){
    if (forest.paused){
        forest.play();}
    else{forest.pause();}
});

seaButton.addEventListener("click",function(){
    if (sea.paused){
        sea.play();}
    else{sea.pause();}
});

thunderButton.addEventListener("click",function(){
    if (thunder.paused){
        thunder.play();}
    else{thunder.pause();}
});