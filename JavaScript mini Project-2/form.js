const form=document.getElementById("myForm");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const confirmPassword=document.getElementById("confirmPassword");

function getErrorDiv(input){
    let errorDiv = input.parentElement.querySelector('.error-message');
    if(!errorDiv){
        errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        input.parentElement.appendChild(errorDiv);
    }
    return errorDiv;
}

function showError(input,message){
    const errorDiv = getErrorDiv(input); 
    errorDiv.innerText=message;
    errorDiv.style.display="block";
    input.style.border = "1px solid red";
}

function clearError(input){
    const errorDiv = getErrorDiv(input); 
    errorDiv.style.display="none";
    input.style.border = "1px solid green";
}


form.addEventListener("submit", function(e) {
    e.preventDefault();
    let isValid=true;
    if(username.value.trim()=== ""){
        showError(username,"Name is Required");
        isValid=false;
    }
    else{
        clearError(username);
    }

    

    const emailPattern=/^[^]+@[^]+\.[a-z]{2,3}$/;
    if(!email.value.match(emailPattern)){
        showError(email,"Enter a valid email address");
        isValid=false;
    }
    else{
        clearError(email);
    }



    if(password.value.length<6 ){
        showError(password,"Password should be of 6 characters");
        isValid=false;
    }
    else if(!/^[A-Za-z0-9]+$/.test(password.value)){
        showError(password,"Password should only contain letters and digits");
        isValid=false;
    }
    else{
        clearError(password);
    }

    if(confirmPassword.value!=password.value||confirmPassword.value===""){
        showError(confirmPassword,"Password do not match");
        isValid=false;
    }
    else{
        clearError(confirmPassword);
    }

    if(isValid){
        alert("Form submitted successfully!");
        form.reset();
    }
});

