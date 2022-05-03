/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */


document.getElementById("submit-btn").addEventListener("click", myResult)

function myResult(e){
   e.preventDefault();
   let myInput = document.getElementById("search").value
   document.getElementById("pounds"). value = myInput * 2.2046;
   document.getElementById("grams"). value = myInput / 0.0010000;
   document.getElementById("ounces"). value = myInput * 35.274;

}

