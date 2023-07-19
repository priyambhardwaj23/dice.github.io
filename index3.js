var ran = Math.floor(Math.random() * 6) + 1;
var n = Math.floor(Math.random() * 6) + 1;
var n1;
var n2;
switch (ran) {
    case 1:
        document.querySelector(".img1").setAttribute("src", "dice1.png");
        n1=1;
        break;
    case 2:
        document.querySelector(".img1").setAttribute("src", "dice2.png");
        n1=2;
        break;
    case 3:
        document.querySelector(".img1").setAttribute("src","dice3.png");
        n1=3;
        break;
    case 4:
        document.querySelector(".img1").setAttribute("src","dice4.png");
        n1=4;
        break;
    case 5:
        document.querySelector(".img1").setAttribute("src","dice5.png");
        n1=5;
        break;
    case 6:
        document.querySelector(".img1").setAttribute("src","dice6.png");
        n1=6;
        break;

    default:
        
        break;
}

switch (n) {
    case 1:
        document.querySelector(".img2").setAttribute("src", "dice1.png");
        n2=1;
        break;
    case 2:
        document.querySelector(".img2").setAttribute("src", "dice2.png");
        n2=2;
        break;
    case 3:
        document.querySelector(".img2").setAttribute("src","dice3.png");
        n2=3;
        break;
    case 4:
        document.querySelector(".img2").setAttribute("src","dice4.png");
        n2=4;
        break;
    case 5:
        document.querySelector(".img2").setAttribute("src","dice5.png");
        n2=5;
        break;
    case 6:
        document.querySelector(".img2").setAttribute("src","dice6.png");
        n2=6;
        break;

    default:
        break;
}

if (n1>n2) {
    document.querySelector("h1").innerHTML="Player 1 won";
    
}
else if(n1==n2){
    document.querySelector("h1").innerHTML="Refresh Pleaseee!!!";

}
else{
    document.querySelector("h1").innerHTML="Player 2 won";

}