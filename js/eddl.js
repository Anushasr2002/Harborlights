window.digitalData = window.digitalData || {};
 
// Function to track button clicks
function trackButtonClick(buttonId, buttonLabel, pageName) {
  // Ensure the digitalData object has an events array
  window.digitalData.events = window.digitalData.events || [];
 
  // Push the event data into the events array
  window.digitalData.events.push({
    eventInfo: {
      eventName: "buttonClick",
      buttonId: buttonId,         // ID of the button clicked
      buttonLabel: buttonLabel,   // Label or text of the button
      pageName: pageName          // Page where the event occurred
    }
  });
 
  // Log to console for debugging
  console.log("Button click tracked:", { buttonId, buttonLabel, pageName });
}
 
// Function to track form submissions
function trackFormSubmission(formId, formName, pageName) {
  // Ensure the digitalData object has an events array
  window.digitalData.events = window.digitalData.events || [];
 
  // Push the event data into the events array
  window.digitalData.events.push({
    eventInfo: {
      eventName: "formSubmission",
      formId: formId,             // ID of the form submitted
      formName: formName,         // Name or purpose of the form
      pageName: pageName          // Page where the event occurred
    }
  });
 
  // Log to console for debugging
  console.log("Form submission tracked:", { formId, formName, pageName });
}
 
// Example usage:
 
// Add an event listener for a button click
document.getElementById("submitButton").addEventListener("click", function () {
  trackButtonClick("submitButton", "Submit", "Homepage");
});
 
// Add an event listener for form submission
document.getElementById("signupForm").addEventListener("submit", function (event) {
  // Prevent the default form submission for testing purposes
  event.preventDefault();
 
  trackFormSubmission("signupForm", "Sign-Up Form", "Signup Page");
 
  // Optionally, you can proceed with the form submission logic
  // event.target.submit();
});
