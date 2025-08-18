const username = document.querySelector("#username");
const email=document.querySelector("#email");
const password=document.querySelector("#password");
const cpassword=document.querySelector("#cpassword");
const form=document.querySelector("#form");
form.addEventListener('submit',(e)=>{
    if(!validateInput()){
        e.preventDefault();

    }
})
function validateInput(){
    const usernameval =username.value.trim();
    const emailval=email.value.trim();
    const passwordval=password.value.trim();
    const cpasswordval=cpassword.value.trim();
    let success=true;
    if(usernameval===""){
        success=false;
        setmsg(username,"Username is required");
    }
    else{
        setsuccess(username);
    }
    if(emailval===""){
        success=false;
        setmsg(email,"Email is required");
    }
    else if(!validateEmail(emailval)){
        success=false;
        setmsg(email,"Please enter a vaild Email address");
    }
    else{
        setsuccess(email);
    }
    if(passwordval===""){
        success=false;
        setmsg(password,"Password must be atleast 8 characters");
    }
    else if(!validatepassword(password)){
        success=false;
        setmsg(password,"1 Uppercase, 1 LowerCase, 1 digit, 1 symbol");
    }
    else{
        setsuccess(password);
    }
    if(cpasswordval===""){
        success=false;
        setmsg(cpassword,"confirm password is required");
    }
    else if(cpasswordval!==passwordval){
        success=false;
        setmsg(cpassword,"Password does not match");
    }
    else{
        setsuccess(cpassword);
    }
    return success;
}
function setmsg(element,message) {
    const inputgroup = element.parentElement;
    const msgElement = inputgroup.querySelector('.msg');

    msgElement.innerText = message;
    inputgroup.classList.add('.msg');
    inputgroup.classList.remove('success');
}

function setsuccess(element) {
    const inputgroup = element.parentElement;
    const msgElement = inputgroup.querySelector('.msg');

    msgElement.innerText = "";
    inputgroup.classList.add('.msg');
    inputgroup.classList.remove('success');
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}

const validatepassword = (password) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/.test(password);
};