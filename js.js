
var clap = new Audio;
clap.src = "drums/clap.mp3";
var cowbel = new Audio;
cowbel.src = "drums/cowbel.mp3";
var crash = new Audio;
crash.src = "drums/crash.mp3";
var drum = new Audio;
drum.src = "drums/drum.mp3";
var hithat = new Audio;
hithat.src = "drums/hithat.mp3";
var maracas = new Audio;
maracas.src = "drums/maracas.mp3";
var rimshot = new Audio;
rimshot.src = "drums/rimshot.mp3";
var snare = new Audio ;
snare.src = "drums/snare.mp3";
var snare1 = new Audio;
snare1.src = "drums/snare1.mp3";
var songs = {
  "clap" : clap,
  "cowbel" : cowbel,
  "crash" : crash,
  "drum" : drum ,
  "hithat" : hithat,
  "maracas":maracas,
  "rimshot" : rimshot,
  "snare":snare,
  "snare1": snare1
};
console.log(songs["drum"]);

var btn = document.getElementsByClassName("keys");

document.addEventListener("keypress", function(n){

 if((/[asdfghjkl]/).test(n.key)){
   document.getElementById(n.key).classList.add("playing");

   var song  = document.getElementById(n.key).getAttribute("target");
   var music = songs[song];
   music.play();
  setTimeout(function(){
    music.currentTime= 0;
  }, 100 )
   setTimeout(function(){
     document.getElementById(n.key).classList.remove("playing");

  },200)
 }

})
// well you are having problems playing the song and it is slow
