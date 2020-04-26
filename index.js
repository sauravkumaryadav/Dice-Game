//for player 1

var randomNumber1=Math.floor(Math.random()*6)+1; //it gives random number btw 1-6
var randomImageSource1="images/dice"+randomNumber1+".png";//images/dice1.png-images/dice6.png
var image1=document.querySelectorAll("img")[0]; // image1 is player 1 dice image
image1.setAttribute('src',randomImageSource1);


//for player 2

var randomNumber2=Math.floor(Math.random()*6)+1; //it gives random number btw 1-6
var randomImageSource2="images/dice"+randomNumber2+".png";//images/dice1.png-images/dice6.png
var image2=document.querySelectorAll("img")[1];// image2 is player 2 dice image
image2.setAttribute('src',randomImageSource2);


if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML="<i class='fas fa-trophy'></i> player1 wins!";
}

else if(randomNumber1 < randomNumber2)
{
    document.querySelector("h1").innerHTML="<i class='fas fa-trophy'></i> player2 wins!";
}

else
{
    document.querySelector("h1").innerHTML="draw";  
}
