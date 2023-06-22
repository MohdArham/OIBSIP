document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector("#contact-form");

    contactForm.addEventListener("submit", function(event) {
      event.preventDefault();

      // Get form input values
      const firstName = document.querySelector("#fname").value;
      const lastName = document.querySelector("#lname").value;
      const country = document.querySelector("#country").value;
      const subject = document.querySelector("#subject").value;

      // Validate form input
      if (firstName === "" || lastName === "" || country === "" || subject === "") {
        alert("Please fill all the details!!");
        return;
      }
      // Clear form input values
      document.querySelector("#fname").value = "";
      document.querySelector("#lname").value = "";
      document.querySelector("#country").value = "";
      document.querySelector("#subject").value = "";

      alert("Your details have been successfully submitted!!");
    });
  });
//Contact.html js code
          const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form input values
  const firstName = document.querySelector("#fname").value;
  const lastName = document.querySelector("#lname").value;
  const country = document.querySelector("#country").value;
  const subject = document.querySelector("#subject").value;

  // Validate form input
  if (firstName === "" || lastName === "" || country === "" || subject === "") {
    alert("Please fill all the details!!");
    return;
  }
  // Clear form input values
  document.querySelector("#fname").value = "";
  document.querySelector("#lname").value = "";
  document.querySelector("#country").value = "";
  document.querySelector("#subject").value = "";

  alert("Your details have been successfully submitted!!");
});
