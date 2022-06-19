//-------------------------------------detecting button press---------------------------------------------------------------------------//
var n = document.querySelectorAll(".drum").length;
//this loop adds eventlistener for click action to all the buttons ]...
//after the loop run is completed , each button has a eventlistener attached to it.
//so when any of the button is clicked the console goes to the function we provided to respond to the click and
//that function will play sounds according to the first class name assigned to each button...
for(var i = 0;i<n;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function () {//all the code written inside the anonymous function will be executed if click is detected...
    var r = this.innerHTML;//this will find the inner HTML of the object on console at that instant and store it in r...
     makeSound(r);
     buttonAnimation(r);
  });
}

//------------detecting keyboard press-----------------------------------------------------------------//
//---here we added the eventlistener to the whole document so that anywhere key is pressed(detected using keydown),the eventlistener gets revoked.........
//here event is a redefined command which stores all the details of the way used to click(whether click/keyboard/etc) .
document.addEventListener("keydown",function(event){//all the code written inside the anonymous function will be executed if keyboard press is detected...
  makeSound(event.key);
  buttonAnimation(event.key);
});


//-----------writing the actions to be done when the eventlistener notifies------------------------------------------//
//here the exact character whose key was pressed inside the document is passed into the function makeSound which then takes action on the basis of the value of key using if-else ladder...
function makeSound(key){
  if(key=="w"){
    var audio = new Audio('sounds/crash.mp3');
  audio.play();
  }
  else if(key=="a"){
    var audio = new Audio('sounds/kick-bass.mp3');
  audio.play();
  }
  else if(key=="s"){
    var audio = new Audio('sounds/snare.mp3');
  audio.play();
  }
  else if(key=="d"){
    var audio = new Audio('sounds/tom-1.mp3');
  audio.play();
  }
  else if(key=="j"){
    var audio = new Audio('sounds/tom-2.mp3');
  audio.play();
  }
  else if(key=="k"){
    var audio = new Audio('sounds/tom-3.mp3');
  audio.play();
  }
  else if(key =="l"){
    var audio = new Audio('sounds/tom-4.mp3');
  audio.play();
  }
  else{

  }
}

//defining buttonAnimation function--------//
function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  } , 100);
}
