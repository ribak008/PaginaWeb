
let emailV = "";
let passV = "";

let email = document.getElementById("email");
let pass = document.getElementById("pass");

let btLog = document.getElementById("login");

btLog.addEventListener("click",(e)=> {

    e.preventDefault();
    
    emailV = email.value;
    passV = pass.value;

    if(emailV === "" && passV === ""){
        alert("ingresa un valor");
        return;

    }

    console.log(`email: ${emailV} tu pass es ${passV}`);
})
