//dectecting button press
var numberOfDrumButtons = document.querySelectorAll('.drum').length;
for(i = 0; i < numberOfDrumButtons; i++){
    document.querySelectorAll('button')[i].addEventListener("click", function (){
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
}

//dectecting keyword press
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){

    switch(key){

        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;

        case "a":
            var tom1 = new Audio("sounds/kick-bass.mp3");
            tom1.play();
        break;

        case "s":
            var tom1 = new Audio("sounds/snare.mp3");
            tom1.play();
        break;

        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;

        case "j":
            var tom1 = new Audio("sounds/tom-2.mp3");
            tom1.play();
        break;

        case "k":
            var tom1 = new Audio("sounds/tom-3.mp3");
            tom1.play();
        break;

        case "l":
            var tom1 = new Audio("sounds/tom-4.mp3");
            tom1.play();
        break;

        default: console.log(buttonInnerHtml);
    }
}

function buttonAnimation(currentkey){
    var x = document.querySelector("." + currentkey);
    x.classList.add('pressed');
    setTimeout(function(){
        x.classList.remove('pressed');
    },100)
}

