let firstName = document.querySelector("#fname");
let lastName = document.querySelector("#lname");
let email = document.querySelector("#email");
let password = document.getElementById("password");

document.querySelector('.form').addEventListener('submit', validateForm);
document.querySelector('.form').reset();

function validateForm() {
    // e.preventDefault();

    let firstNamevalue = firstName.value;
    let lastNamevalue = lastName.value;
    let emailValue = email.value;
    let passwordValue = password.value;
    if(firstNamevalue.trim().length < 3 || checkInput(firstNamevalue)) {
      alert("Your firstname is either less than 3 characters or has a number");
      return
    }else if(firstNamevalue.trim().length < 3 || checkInput(lastNamevalue)){
        alert("Your lastname is either less than 3 characters or has a number");
      return
    }else if (passwordValue.trim().length < 8) {
        alert("Your password is either less than 8 characters or has a space")
      return
    }

    let userInputs = {
        firstName: firstNamevalue,
        lastName: lastNamevalue,
        email: emailValue,
        password: passwordValue
    }
    localStorage.setItem('userData', JSON.stringify(userInputs));

    
    // storeInput({firstName, lastName, email, password})
   
}


// function storeInput(value) {

//     userInput.push(value)

//     localStorage.setItem('user', JSON.stringify(userInput));
 
// }

function checkInput(value) {
    return value.match(/\d+/) !== null;
}


