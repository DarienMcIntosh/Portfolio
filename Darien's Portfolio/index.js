document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS with your User ID
    emailjs.init("5Zzy5Xcrw5I1zm5e9");

    // Get the contact form and modal elements
    const form = document.getElementById('contact-form');
    const modal = document.getElementById('confirmation-modal');
    const closeButton = document.querySelector('.close-button');

    // Handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Collect form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Send email using EmailJS with all details
        emailjs.send("service_dm43", "template_dm43", {
            from_name: name,     // Sender's name
            from_email: email,   // Sender's email
            message: message,    // Message content
            reply_to: email      // Optional: sets reply-to address
        }).then(
            function(response) {
                console.log("SUCCESS", response);
                // Show confirmation modal
                modal.style.display = 'block';
                // Reset form
                form.reset();
            },
            function(error) {
                console.log("FAILED", error);
                alert("Failed to send message. Please try again.");
            }
        );
    });

    // Close modal functionality
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});