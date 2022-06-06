//Form Check In Contact Page
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const textArea = document.getElementById('textArea');
let errorFname = document.querySelector('.errorFname');
let errorLname = document.querySelector('.errorLname');
let errorEmail = document.querySelector('.errorEmail');
let errorTarea = document.querySelector('.errorTarea');
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    if (firstName.value == "") {
        errorFname.innerText = 'Please Enter First Name';
        errorFname.style.visibility = 'visible';
        errorFname.style.color = 'red';
    } else {
        errorFname.innerText = 'Great ✔️';
        errorFname.style.color = 'green';
    }
    if (lastName.value == "") {
        errorLname.innerText = 'Please Enter Last Name';
        errorLname.style.visibility = 'visible';
        errorLname.style.color = 'red';
    } else {
        errorLname.innerText = 'Great ✔️';
        errorLname.style.color = 'green';
    }
    if (email.value == "") {
        errorEmail.innerText = 'Please Enter Email';
        errorEmail.style.visibility = 'visible';
        errorEmail.style.color = 'red';

    } else if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        errorEmail.innerText = 'Please Enter Correct Email';
        errorEmail.style.visibility = 'visible';
        errorEmail.style.color = 'red';
        e.preventDefault();
    } else {
        errorEmail.innerText = 'Great ✔️';
        errorEmail.style.color = 'green';
    }
    if (textArea.value == "") {
        errorTarea.innerText = 'Please Enter Your Text';
        errorTarea.style.visibility = 'visible';
        errorTarea.style.color = 'red';
    } else {
        errorTarea.innerText = 'Great ✔️';
        errorTarea.style.color = 'green';
    }
    if (firstName.value == "" || lastName.value == "" || email.value == "" || textArea.value == "") {
        e.preventDefault();
    }
});