// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector('.button');
    button.addEventListener('click', function (event) {
        event.preventDefault();
        const target = document.getElementById(this.getAttribute('href').substring(1));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector('.button[href="#contact-form"]');
    button.addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelector('#contact-form').scrollIntoView({ behavior: 'smooth' });
    });
});
document.addEventListener('DOMContentLoaded', (event) => {
    const emailElement = document.getElementById('email-copy');

    emailElement.addEventListener('click', function () {
        // Create a temporary hidden textarea to hold the email
        const textarea = document.createElement('textarea');
        textarea.value = emailElement.textContent; // or innerText depending on your needs
        document.body.appendChild(textarea);

        // Select the text and copy it to clipboard
        textarea.select();
        document.execCommand('copy');

        // Remove the temporary textarea
        document.body.removeChild(textarea);

        // Optionally, display a message confirming the copy action
        alert('Email address copied to clipboard!');
    });
});
emailElement.addEventListener('click', async function () {
    try {
        await navigator.clipboard.writeText(emailElement.textContent);
        console.log('Email address copied to clipboard!');
        // Update the UI to show the copy was successful
    } catch (err) {
        console.error('Failed to copy email: ', err);
        // Update the UI to show the copy failed
    }
});
function copyEmailToClipboard() {
    const email = 'anhadpre@ualberta.ca';
    navigator.clipboard.writeText(email).then(function () {
        const confirmation = document.getElementById('copy-confirmation');
        confirmation.style.display = 'block';
        confirmation.style.opacity = '1';

        setTimeout(() => {
            confirmation.style.opacity = '0';
            setTimeout(() => {
                confirmation.style.display = 'none';
            }, 300); // Match this duration with your CSS transition
        }, 2000);
    }, function (err) {
        console.error('Could not copy text: ', err);
    });
}


