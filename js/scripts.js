

function rollDice() {
  var die1= document.getElementById("die1");

  var status = document.getElementById("status");
  var d1 = Math.floor(Math.random() * 6) + 1;



  die1.innerHTML= d1;

if (d1 === 1) {
  status.innerHTML += "oops! go home u rolled 1 :)"

}



}

}
