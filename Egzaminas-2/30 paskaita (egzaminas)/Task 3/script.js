/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */
document.getElementById('btn').addEventListener("click", myResult)
const ENDPOINT = 'https://api.github.com/users';
function myResult(){
fetch(ENDPOINT)
.then(res => res.json)
.then(getData =>{
    let outputData = "";
    getData.forEach((item, index) =>{
        output += ` 
        <p>${item.login}</p>
        <img src="${item.avatar_url} alt="#">`;
    })
    document.getElementById("output").innerHTML = outputData;
  })
  .catch(err => console.log("nepavyko",err));}
    
    
