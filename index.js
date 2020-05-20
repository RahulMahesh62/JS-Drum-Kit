var numberOfDrums = document.querySelectorAll(".drum").length;

for(var i =0; i < numberOfDrums; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){

        var a1 = new Audio("sounds/tom-1.mp3");
        a1.play();
    });
}