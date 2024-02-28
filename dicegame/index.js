let player1;
let player2;
           function nameinput()
{
     player1=prompt("Enter First Player Name");
     player2=prompt("Enter Second Player Name");

     document.querySelectorAll("p")[0].innerHTML=player1;
     document.querySelectorAll("p")[1].innerHTML=player2;
}

document.querySelectorAll("button")[1].addEventListener("click",nameinput);

function RollTheDice()
{
     let randomnofirst=Math.floor(Math.random()*6)+1;
     let  randomnosecond=Math.floor(Math.random()*6)+1;

     document.querySelectorAll("img")[0].setAttribute("src","images/dice"+randomnofirst+".png");
     document.querySelectorAll("img")[1].setAttribute("src","images/dice"+randomnosecond+".png");

     if(randomnofirst>randomnosecond)
     {
          document.querySelector("h1").innerHTML=player1+" wins";
     }
     else if(randomnosecond>randomnofirst)
     {
          document.querySelector("h1").innerHTML=player2+" wins";
     }
     else
     {
          document.querySelector("h1").innerHTML="Its A Tie";
     }

     console.log(randomnofirst,randomnosecond);
}
document.querySelectorAll("button")[0].addEventListener("click",RollTheDice);

