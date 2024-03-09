const hireButton = document.getElementById("hire-btn");
const fiverButton = document.getElementById("fiver-btn");
const linkButton = document.getElementById("linkedin-btn");
const landingButtons = document.getElementById("landings-btn");

hireButton.addEventListener("click", function () {
    landingButtons.scrollIntoView({ bihavior: "smooth" });
    fiverButton.style.marginTop = "70px";

    setTimeout(() => {
        fiverButton.style.marginTop="0px";
    }, 5000);

});

const portfolioLink = document.getElementById("portfolio-link");
const portfolio = document.getElementById("portfolio");

// portfolio section

portfolioLink.addEventListener("click", function (event) {
    event.preventDefault();

    portfolio.scrollIntoView({ bihavio: "smooth" });


});

// Contact button

const contactButton = document.getElementById("contact-btn").addEventListener("click", function () {
    contact.scrollIntoView({ bihavior: "smooth" });
});


// Expertise section

const expertiseLink = document.getElementById("expertise-link");
const expertise = document.getElementById("expertise");

expertiseLink.addEventListener("click", function (event) {
    event.preventDefault();

    expertise.scrollIntoView({ bihavior: "smooth" });
});

// Services section

const servicesLink = document.getElementById("Services-link");
const services = document.getElementById("services");

servicesLink.addEventListener("click", function (event) {
    event.preventDefault();

    services.scrollIntoView({ bihavior: "smooth" });
});



// Contact section

const contactLink = document.getElementById("contact-link");
const contact = document.getElementById("contact");

contactLink.addEventListener("click", function (event) {
    event.preventDefault();

    contact.scrollIntoView({ bihavior: "smooth" });
});


// About section

const aboutLink = document.getElementById("about-link");
const about = document.getElementById("about");

aboutLink.addEventListener("click", function (event) {
    event.preventDefault();

    about.scrollIntoView({ bihavior: "smooth" });
})