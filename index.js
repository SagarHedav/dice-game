var randomNumber1 = Math.floor(6 * Math.random()) + 1;
var randomNumber2 = Math.floor(6 * Math.random()) + 1;
var srcAddress1 = "./images/dice"+randomNumber1+".png";
var srcAddress2 = "./images/dice"+randomNumber2+".png";
document.querySelector(".img1").setAttribute("src" , srcAddress1);
document.querySelector(".img2").setAttribute("src" , srcAddress2);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "player 1 wins";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "player 2 wins";
}
else{
    document.querySelector("h1").innerHTML = "draw";
}