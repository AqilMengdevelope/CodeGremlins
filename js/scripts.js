(function () {
    // Initialize EmailJS
    emailjs.init("tFkGwasYuQeowrW3p"); // Replace with your public key
    console.log("EmailJS Initialized");
})();

window.onload = function () {
    const forms = document.querySelectorAll("#contactForm, #contactForm1");

    forms.forEach((form) => {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            // Get the button and its elements
            const submitButton = form.querySelector("#submitButton");
            const spinner = submitButton.querySelector("#spinner");
            const buttonText = submitButton.querySelector("#buttonText");

            // Show the spinner and disable the button
            spinner.classList.remove("d-none");
            buttonText.textContent = "Sending...";
            submitButton.disabled = true;

            console.log("Submitting form:", form);

            // Send form data
            emailjs.sendForm("service_m6c6o28", "template_sni34o5", form)
                .then(() => {
                    console.log("Email sent successfully");

                    // Hide spinner, re-enable the button, and show success message
                    spinner.classList.add("d-none");
                    buttonText.textContent = "Submit";
                    submitButton.disabled = false;

                    form.querySelector("#submitSuccessMessage").classList.remove("d-none");
                    form.querySelector("#submitErrorMessage").classList.add("d-none");

                    form.reset();
                }, (error) => {
                    console.error("Email sending failed:", error);

                    // Hide spinner, re-enable the button, and show error message
                    spinner.classList.add("d-none");
                    buttonText.textContent = "Submit";
                    submitButton.disabled = false;

                    form.querySelector("#submitErrorMessage").classList.remove("d-none");
                    form.querySelector("#submitSuccessMessage").classList.add("d-none");
                });
        });
    });
};

const logoLinks = document.querySelectorAll('.logoLink');

logoLinks.forEach(function (logoLink) {
    logoLink.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling to the top
        });
    });
});

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
    

