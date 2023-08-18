document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');
    const message = document.getElementById('message');

    registrationForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Perform basic validation (e.g., length, format)
        if (username === '' || email === '' || password === '') {
            message.textContent = 'All fields are required.';
        } else {
            // Send data to the server for insertion
            const formData = new FormData();
            formData.append('username', username);
            formData.append('email', email);
            formData.append('password', password);

            fetch('register.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                message.textContent = data.message;
                if (data.success) {
                    registrationForm.reset();
                }
            })
            .catch(error => {
                console.error(error);
                message.textContent = 'An error occurred while registering.';
            });
        }
    });
});
