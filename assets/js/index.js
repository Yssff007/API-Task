var inputEmail = document.getElementById('inputEmail')
var inputPassword = document.getElementById('inputPassword')
var emailHelp = document.getElementById('emailHelp')
var emailError = document.getElementById('emailError')
var passwordError = document.getElementById('passwordError')




function validationEmail(){
  var regx = /^[a-zA-Z0-9._-]{1,99}(@)[a-zA-Z0-9]{1,99}(.)[a-zA-Z]{1,3}$/;
  if(regx.test(inputEmail.value)==true){
    return true
  }
  else{
    emailHelp.classList.add('d-none')
    emailError.classList.remove('d-none')
  }
}
function validationPassword(){
  var regx =/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/;
  if(regx.test(inputPassword.value)==true){
    return true
  }
  else{
    passwordError.classList.remove('d-none')
  }
}
var form = document.getElementById('form')
form.addEventListener('submit',function(event){
  if( validationEmail()==true && validationPassword()==true ){
    form.submit();
  }
  else{
    event.preventDefault();
  }
});