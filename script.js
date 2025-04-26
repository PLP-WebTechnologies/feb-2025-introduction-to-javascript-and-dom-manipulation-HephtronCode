// Write JavaScript that:
    // Changes text content dynamically.
    // Modifies CSS styles via JavaScript.
    // Adds or removes an element when a button is clicked.

// 1. Change text content dynamically
const header = document.querySelector('#header h1');
header.textContent = 'Welcome to Rayyan University Digital Library';

// 2. Modify CSS styles via JavaScript
const form = document.querySelector('#registration-form');
form.style.border = '2px solid #4CAF50';
form.style.padding = '20px';
form.style.borderRadius = '8px';

// 3. Add or remove an element when a button is clicked
const successMessage = document.querySelector('#success-message');
const registerButton = document.querySelector('button[type="submit"]');

form.addEventListener('submit', (event) => {
    // Prevent default submission only if fields are invalid
    const username = document.querySelector('#username').value.trim();
    const studentId = document.querySelector('#student-id').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    const confirmPassword = document.querySelector('#confirm-password').value.trim();
    const terms = document.querySelector('#terms').checked;

    if (!username || !studentId || !email || !password || password !== confirmPassword || !terms) {
        event.preventDefault(); // Prevent submission if validation fails
        successMessage.style.display = 'block';
        successMessage.textContent = 'Please fill out all fields correctly and agree to the terms.';
        successMessage.style.color = 'red';
    } else {
        // Allow form submission and show success message
        successMessage.style.display = 'block';
        successMessage.textContent = 'Registration successful! Redirecting...';
        successMessage.style.color = 'green';
    }
});


