 var randomNumber1 = Math.floor(Math.random() * 6)+1;
 var const_img="images/dice";
 document.getElementsByClassName("img1")[0].setAttribute("src",const_img+randomNumber1+".png");

 var randomNumber2 = Math.floor(Math.random() * 6)+1;
 var const_img2="images/dice";
 document.getElementsByClassName("img2")[0].setAttribute("src",const_img2+randomNumber2+".png");


if(randomNumber1>randomNumber2){
  document.getElementsByTagName("h1")[0].innerHTML="Player 1 WINS!!";
}else if(randomNumber2>randomNumber1){
  document.getElementsByTagName("h1")[0].innerHTML="Player 2 WINS!!";
}else {

  document.getElementsByTagName("h1")[0].innerHTML="DRAW";
}
