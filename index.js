//selectors
let submitB = document.getElementById('submit')
let myForm = document.getElementById('myForm')
let fname = document.getElementById('fname')
let email = document.getElementById('email')
let lname = document.getElementById('lname')
let password = document.getElementById('mypassword')
let confirm = document.getElementById('confirm')
let pass = document.getElementById('pass')
let check = document.getElementById('check')



// event listeners

myForm.addEventListener('submit', validate);

password.addEventListener('focusout', numify)

confirm.addEventListener('focusout', comparefy)


//functions


function validate(e) {

    console.log(email.value.indexOf('@'));


    if (fname.value === '' || fname.value == null) {
        e.preventDefault()
        let err = document.createElement('p');
        err.innerHTML = '*input your first name';
        err.style.color = 'red'
        myForm.prepend(err)
        window.scrollTo(0, 0)
    }

    if (lname.value === '' || lname.value == null) {
        e.preventDefault()
        let err = document.createElement('p');
        err.innerHTML = '*input your last name';
        err.style.color = 'red'
        myForm.prepend(err)
        window.scrollTo(0, 0)
    }

    if (email.value === '' || email.value === null) {
        e.preventDefault()
        let err = document.createElement('p');
        err.innerHTML = '*input your email';
        err.style.color = 'red'
        myForm.prepend(err)
        window.scrollTo(0, 0)
    }


}



function numify(e) {
    // let password = document.getElementById('mypassword')
    console.log(password.value);


    if (isNaN(password.value)) {
        console.log(password.value);

        pass.innerHTML = '* no number in the password';
        pass.style.color = 'red'
    }
}

function comparefy(e) {
    console.log(confirm.value, password.value);

    if (confirm.value !== password.value) {
        check.innerHTML = '*ensure the comfirmation is the same'
        check.style.color = 'red'
    }

}