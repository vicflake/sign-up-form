let submitForm = document.getElementById("btn__input");


    submitForm.addEventListener("click", function(){
        let firstName = document.getElementById("input_item_first");
        let lastName = document.getElementById("input_item_last");
        let email = document.getElementById("input_item_email");
        let password = document.getElementById("input_item_password");
        let firstNameError;
        let lastNameError;
        let emailError;
        let passwordError;


        // VALIDATE FIRST NAME
        if (firstName.value.length != 0){
            firstNameError = "";
            firstName.classList.remove("invalid");
        } else {
            firstNameError = "First Name cannot be empty";
        
            firstName.classList.add("invalid");
        }


        // VALIDATE LAST NAME
        if (lastName.value.length != 0){
            lastNameError = "";
            lastName.classList.remove("invalid");
        } else {
            lastNameError = "Last Name cannot be empty";

            lastName.classList.add("invalid");

        }

        // VALIDATE EMAIL
        if (email.value.length != 0){
            emailError = "";
            email.classList.remove("invalid");
        } else {
            emailError = "Last Name cannot be empty";

            email.classList.add("invalid");

        }
        // VALIDATE PASSWORD
        if (password.value.length != 0){
            passwordError = "";
            password.classList.remove("invalid");
        } else {
            passwordError = "Last Name cannot be empty";

            password.classList.add("invalid");

        }
        
        document.getElementById("input_item_first_error").innerHTML = firstNameError;
        document.getElementById("input_item_last_error").innerHTML = lastNameError;
        document.getElementById("input_item_email_error").innerHTML = emailError;
        document.getElementById("input_item_password_error").innerHTML = passwordError;
    });