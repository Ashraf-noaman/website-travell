// Tutorial - https://youtu.be/VufN46OyFng

// Targetting all classes & id from HTML

let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let x = document.getElementById("submit");

let bool = false;
let username = id("username"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

// validation check
// Adding the submit event Listener
x.addEventListener("click" , ()=>{
  engine(username , 0 , "user Name must be inserted");
  engine(email , 1 , "email must be inserted");
  engine(password , 2 , "password must be inserted");
})
// engine function which will do all the works
let engine = (id, serial , message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";

    // icons
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
    form.attributes.action.value = " ";
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";
    // icons
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
    form.attributes.action.value = "login.html";
  }
};