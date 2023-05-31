const message = document.querySelector("#message");
const form = document.querySelector("#from");
const password1=document.querySelector("#password1");
const password2=document.querySelector("#password2");

let isvalid = false;
let passwordMatch=false;

function validateform() {
  isvalid = form.checkValidity();
  if (!isvalid) {
    message.textContent = "please fill out all feilds";
    message.style.color = "red";
  }else{
    if (password1.value===password2.value){
      passwordMatch=true;

      password1.style.bordercolor='green';
      password2.style.bordercolor='green';
    
    }else{
      passwordMatch=false;
      message.textContent='Make sure password is match';
      message.style.color='red'

      password1.style.bordercolor='red';
      password2.style.bordercolor='red';
    }
    if(isvalid && passwordMatch){
      message.textContent='Successfully  registered';
      message.style.color= 'green';
    }
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateform();
});
