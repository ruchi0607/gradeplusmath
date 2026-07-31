// Initialize EmailJS
emailjs.init("Hj_7Fz-WaXKCzu5Ju");

// Get the form
const form = document.getElementById("assessment-form");

// Listen for form submission
form.addEventListener("submit", function (e) {

    e.preventDefault();

    const button = form.querySelector("button");

    button.disabled = true;
    button.innerHTML = "Sending...";

    emailjs.sendForm(
        "service_43tz6ut",
        "template_r2udego",
        form
    )
    .then(() => {

        alert("Thank you! Your request has been submitted successfully.");

        form.reset();

    })
    .catch((error) => {

        console.error(error);

        alert("Sorry, something went wrong. Please try again.");

    })
    .finally(() => {

        button.disabled = false;
        button.innerHTML = "Request Free Assessment";

    });

});