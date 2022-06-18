"use strict";

// an event is an inner action between the user and the browser

// step 1 the user does something
// step 2 the browser responds

// handle events with event handlers
// functions we write to handle events

// function focusOnMe(){
//     console.log('You are focused on me')
// }



let my_form = document.getElementById('my_form');


// i will need to listen to the events on the form

function submitForm(e){
    e.preventDefault() //resets behavior
    let printHere = document.getElementById('footerAnswer');
    printHere.textContent = 
   `First Name: ${document.getElementById('firstName').value}
    Last Name: ${document.getElementById('lastName').value}
    Username: ${document.getElementById('userName').value}
    Password: ${document.getElementById('password').value}
    Email: ${document.getElementById('email').value}
    Phone Number: ${document.getElementById('phoneNumber').value}
    City: ${document.getElementById('cityMenu').value}
   `;
    my_form.reset() //resets the form
}

// function listenForUser(e){
// console.log(e.target.value)
// // returns the value of the dom element you're listening to
// }



my_form.addEventListener('submit', submitForm);
// userNameInputField.addEventListener('keydown', listenForUser)


// function formArray(){
// for (i = 0; i < myFormArray.length; i ++){
//     console.log(myFormArray[i])
// }
// }
// formArray();







// my_form.addEventListener('submit', FormObject);



// userName.onfocus = focusOnMe;
// document.body.addEventListener('click', function(){
//     console.log('you clicked here')
// });



// whatever element you bind an event to, you also bind that event 
// to its children

