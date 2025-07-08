let loginform=document.getElementById("loginform")
loginform.addEventListener("submit",(e)=>{
    e.preventDefault();

let myusername=document.getElementById("emailinput");
let password=document.getElementById("passwordinput");

if(myusername.value=="" || password.value==""){
    alert("Ensure you input a value in both fields!");
}
else{
    alert("This form has successfully submitted !");
    console.log(`My Email is ${myusername.value} and the password is ${passwordinput.value}`);

    myusername.value="";
    passwordinput.value="";
}
});

