
var clap = new Audio;
clap.src = "drums/clap.wav";
var boom = new Audio;
boom.src = "drums/boom.wav";
var tink = new Audio;
tink.src = "drums/tink.wav";
var ride = new Audio;
ride.src = "drums/ride.wav";
var hihat = new Audio;
hihat.src = "drums/hihat.wav";
var openhat = new Audio;
openhat.src = "drums/openhat.wav";
var kick = new Audio;
kick.src = "drums/kick.wav";
var snare = new Audio ;
snare.src = "drums/snare.wav";
var tom = new Audio;
tom.src = "drums/tom.wav";
var songs = {
  "clap" : clap,
  "boom": boom ,
 "tink" : tink,
  "ride": ride,
  "hihat" : hihat,
  "openhat": openhat,
  "kick" : kick,
  "snare":snare,
  "tom" : tom
};
console.log(songs["drum"]);

var btn = document.getElementsByClassName("keys");

document.addEventListener("keypress", function(n){

 if((/[asdfghjkl]/).test(n.key)){
   document.getElementById(n.key).classList.add("playing");

   var song  = document.getElementById(n.key).getAttribute("target");
   var music = songs[song];
   music.currentTime = 0;
   music.play();

   setTimeout(function(){
     document.getElementById(n.key).classList.remove("playing");

  },200)
 }

})
// well you are having problems playing the song and it is slow
