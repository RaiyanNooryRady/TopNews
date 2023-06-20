let signUpClicked=document.getElementById('go-signup');
let loginClicked=document.getElementById('go-login');
let signUpArea=document.getElementById('signup-area');
let loginArea=document.getElementById('login-area');
signUpClicked.addEventListener('click',function(){
    signUpArea.style.display="block";
    loginArea.style.display="none";

});
loginClicked.addEventListener('click',function(){
    signUpArea.style.display="none";
    loginArea.style.display="block";

});