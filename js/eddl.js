// Ensure digitalData is initialized
window.digitalData = window.digitalData || {};

// Function to track button clicks
function trackButtonClick(buttonId, buttonLabel, pageName) {
  window.digitalData.events = window.digitalData.events || [];
  window.digitalData.events.push({
    eventInfo: {
      eventName: "buttonClick",
      buttonId: buttonId,
      buttonLabel: buttonLabel,
      pageName: pageName
    }
  });
  console.log("Button click tracked:", { buttonId, buttonLabel, pageName });
}

// Function to track form submissions
function trackFormSubmission(formId, formName, pageName) {
  window.digitalData.events = window.digitalData.events || [];
  window.digitalData.events.push({
    eventInfo: {
      eventName: "formSubmission",
      formId: formId,
      formName: formName,
      pageName: pageName
    }
  });
  console.log("Form submission tracked:", { formId, formName, pageName });
}

// Event listener for the "Send Message" button on the Contact Page
const sendMessageButton = document.getElementById("sendMessageButton");
if (sendMessageButton) {
  sendMessageButton.addEventListener("click", function () {
    trackButtonClick("sendMessageButton", "Send Message", "Contact Page");
  });
}

// Event listener for the contact form submission on the Contact Page
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default submission for testing
    trackFormSubmission("contactForm", "Contact Form", "Contact Page");
    // Uncomment the line below to allow normal form submission
    // event.target.submit();
  });
}

// Add similar event tracking for other pages and interactions
// Example for a button on the Home Page
const bookNowButton = document.getElementById("bookNowButton");
if (bookNowButton) {
  bookNowButton.addEventListener("click", function () {
    trackButtonClick("bookNowButton", "Book Now", "Homepage");
  });
}

// Example for a form submission on the Booking Page
const bookingForm = document.getElementById("bookingForm");
if (bookingForm) {
  bookingForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default submission for testing
    trackFormSubmission("bookingForm", "Booking Form", "Booking Page");
    // Uncomment the line below to allow normal form submission
    // event.target.submit();
  });
}

// Additional tracking for navigation clicks (optional)
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    trackButtonClick(link.textContent.trim(), link.href, "Navigation");
  });
});
