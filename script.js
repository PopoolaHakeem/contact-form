
const Form = document.getElementById('contactForm');
const successMsg = document.getElementById('successMessage');
const errorMsg = document.getElementById('errorMessage');

Form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const general = document.getElementById('general');
    const support = document.getElementById('support');
    const TnC = document.getElementById('T&C');

    clearError();

    // REQUIRED VALIDATION 
    if (firstName.value.trim() === '') {
        isValid = false;
        showError(firstName, 'first name is required');
    }

    if (lastName.value.trim() === '') {
        isValid = false;
        showError(lastName, 'last name is required');
    }

    if(email.value.trim() === '') {
        isValid = false;
        showError(email, 'email is required');
    }

    if (message.value.trim() === '') {
        isValid = false;
        showError(message, 'message is required');
    }

    if (general.checked === false && support.checked === false ) {
        isValid = false;
        showError(general, 'please select an option')
    }

    if (TnC.checked === false) {
        isValid = false;
        showError(TnC, 'you must consent to being contacted')
    }


    // IF EVERYTHING IS VALID, SHOW SUCCESS MESSAGE
    if (isValid) {
        successMsg.classList.remove('hidden');
        errorMsg.classList.add('hidden');
    } else {
        successMsg.classList.add('hidden');
        errorMsg.classList.remove('hidden');
    }


})

// FUNCTION TO SHOW ERROR MESSAGE
function showError(input, message) {
    const error = document.createElement('small');
    error.className = 'errorMessage'
    error.textContent = message
    error.style.color = 'red';
    

    input.parentElement.appendChild(error);

}

// FUNCTION TO CLEAR ERROR MESSAGES
function clearError() {
    const errors = document.querySelectorAll('.errorMessage');
    errors.forEach(error => error.remove());
}

// FUNCTION TO CHECK VALID EMAIL
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}