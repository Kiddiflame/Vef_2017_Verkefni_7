//1. Besta leiðin til að binda event with element er með að nota Dom level 2 event listeners, þar sem hægt er að binda meira en eitt function við eitt element
/*
element.addEventListener('event', functionName [, boolean]);
*/
//2. Callbacks eru bara asynchronous leið til að kalla á functions án þess að stoppa öll önnur javascript functions á meðan það eina function keyrir. Þetta gerir vefsíður hraðari og mun þægilegri fyrir notanda

//3. Event loop er einfaldlega ferillinn sem javascript þýðandinn í vefsíðum fer í gegnum til að vísa í, kalla á, geyma og loks keira functions eins og er viðeigandi. Síðan kannar hvort function er í "cue-inu" og síðan keyrir það upp, nýtt function er sett í cue-ið í staðin, og svo þegar fyrsta function-ið er búið, sækir það næsta function í röðinni

//4.
/*
"use strict";
function checkUsername() {
var target = e.target;
}
var el = document.getElementById("username");
el.addEventlistener("blur", checkUsername, false);
*/

//5. Það þýðir að það hefur ekki verið trigger-að strax, það er ekki búið að keyra event-ið

//6.
/*
stopPropagation() geturðu notað til að stoppa event frá að gilda í elementunum sem eru staðsett hærra í dom tré-inu. T.d. if event trigger-ast við a tag, geturðu stoppað það event af áður en það fer í containing div elementið
preventDefault() geturðu notað til að stoppa af default hegðun ákveðna forma og linka. Ef maður skildi klicka á link fer maður oftast á þá vefsíðu, preventDefault núllar þá hegðun út

*/

//7

function getTarget(e)
{
  if(!e)
  {
   e = window.eventL
  }
  return e.target || e.srcElement;
}

function changeColor(e)
{
  var target, elParent, elGrandparent;
  target = getTarget(e);
  elParent = target.parentNode;
  elGrandparent = target.parentNode.parentNode;
  elParent.style.backgroundColor(rgb(255,0,0))


  if(e.preventDefault)
  {
  e.preventDefault();
  }
  else
  {
  e.returnValue = false;
  }
}

var el = document.getElementById('box');
if (el.addEventlistener) 
{
  el.addEventlistener('click', function(e)
  {
    changeColor(e);
  }, false);
}


