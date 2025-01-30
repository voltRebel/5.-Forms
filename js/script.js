document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form');
    const signupForm = document.querySelector('.signup-form');
    const forgotForm = document.querySelector('.forgot-form');
    const toggleForms = document.querySelectorAll('.toggle-form');
    const toggleForgot = document.querySelector('.toggle-forgot');
    const toggleLogin = document.querySelector('.toggle-login');

    // Toggle between login and signup forms
    toggleForms.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            loginForm.classList.toggle('slide-out');
            signupForm.classList.toggle('slide-in');
            forgotForm.classList.remove('slide-in');
        });
    });

    // Show forgot password form
    toggleForgot.addEventListener('click', function(e) {
        e.preventDefault();
        loginForm.classList.add('slide-out');
        signupForm.classList.remove('slide-in');
        forgotForm.classList.add('slide-in');
    });

    // Return to login form from forgot password
    toggleLogin.addEventListener('click', function(e) {
        e.preventDefault();
        loginForm.classList.remove('slide-out');
        signupForm.classList.remove('slide-in');
        forgotForm.classList.remove('slide-in');
    });
});
