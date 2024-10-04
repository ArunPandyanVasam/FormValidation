/* Name: Arun Pandyan Vasam */
/* Date: 13/june/2023 */

function formSubmit() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmpassword = document.getElementById('confirmpassword').value;
    var email = document.getElementById('email').value;
    var contactnumber = document.getElementById('contactnumber').value;

    function userNameValidate() {
        if (username.trim() == "") {
            document.getElementById("usernameCheckmark").innerHTML = '&#10060'; 
            document.getElementById("usernameError").innerHTML = 'username is required';
            
        
        } else if (username.trim().length < 5) {
            document.getElementById("usernameCheckmark").innerHTML = '&#10060'; 
            document.getElementById("usernameError").innerHTML = 'username must be at least 5 characters long'; 
            
        } else {
            document.getElementById("usernameCheckmark").innerHTML = '&#9989'; 
            document.getElementById("usernameError").innerHTML = ' '; 
        }
    }

    userNameValidate();

    function passwordValidate() {
        if (password.trim() == "" ){
            document.getElementById("passwordCheckmark").innerHTML = '&#10060'; 
            document.getElementById("passwordError").innerHTML = 'password is required';
           
        }  else if (password.trim().length < 5) {
            document.getElementById("passwordCheckmark").innerHTML = '&#10060'; 
            document.getElementById("passwordError").innerHTML = 'password must be at least 5 characters long';
            
        } else {
            document.getElementById("passwordCheckmark").innerHTML = '&#9989'; 
            document.getElementById("passwordError").innerHTML = ' '; 
        }
    }
    
    passwordValidate();

    function confirmPasswordValidate() {
        if (confirmpassword.trim() == "" ){
            document.getElementById("confirmpasswordCheckmark").innerHTML = '&#10060'; 
            document.getElementById("confirmpasswordError").innerHTML = 'confirm password is required';
            
        }  else if (confirmpassword.trim() != password.trim()) {
            document.getElementById("confirmpasswordCheckmark").innerHTML = '&#10060'; 
            document.getElementById("confirmpasswordError").innerHTML = 'Password did not matched';
            
        } else {
            document.getElementById("confirmpasswordCheckmark").innerHTML = '&#9989'; 
            document.getElementById("confirmpasswordError").innerHTML = ' '; 
        }
    }

    confirmPasswordValidate();

    function genderValidate() {
        var gender = document.getElementsByName('gender');
        var genderIndex = -1;
    
        for (var i = 0; i < gender.length; i++) {
            if (gender[i].checked) {
                genderIndex = i;
                document.getElementById("genderCheckmark").innerHTML = '&#9989'; 
            } else {
                document.getElementById("genderCheckmark").innerHTML = '&#10060'; 
            }
        }
    }

    genderValidate();
    

    function emailValidate(){
        if (email.trim() == "" ){
            document.getElementById("emailCheckmark").innerHTML = '&#10060'; 
            document.getElementById("emailError").innerHTML = 'email is required';
            
        } else {
            document.getElementById("emailCheckmark").innerHTML = '&#9989';
            document.getElementById("emailError").innerHTML = ' '; 
        }
    
    }

    emailValidate();

    function contactnumberValidate(){
        var phoneReg = /^(\d{10})$/;

        if (contactnumber.length != 10 ){
            document.getElementById("contactnumberCheckmark").innerHTML = '&#10060'; 
            document.getElementById("contactnumberError").innerHTML = 'contactnumber is required';
            
        } else if (phoneReg.test(contactnumber)) {
            document.getElementById("contactnumberCheckmark").innerHTML = '&#9989';
            document.getElementById("contactnumberError").innerHTML = ' ';  
        }
    }

    contactnumberValidate();
    
    return false;
}


   