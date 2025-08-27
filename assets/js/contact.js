document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector("#contact-form");
  const popup = document.getElementById("success-popup");

  contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const data = {
      firstname: document.querySelector("#fname").value.trim(),
      lastname: document.querySelector("#lname").value.trim(),
      email: document.querySelector("#email").value.trim(),
      subject: document.querySelector("#subject").value.trim(),
    };

    if (!data.firstname || !data.lastname || !data.email || !data.subject) {
      alert("Please fill all the details!!");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("firstname", data.firstname);
      formData.append("lastname", data.lastname);
      formData.append("email", data.email);
      formData.append("subject", data.subject);

      await fetch("https://script.google.com/macros/s/AKfycbyQ0n-7J7MjvXc-0G8g0yXC0aTFWhI62Ky4elVmi9LXAzRmGGaPlirLtkgs59BFQ2k5/exec", {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      popup.style.display = "block";

      setTimeout(() => {
        popup.style.display = "none";
        window.location.href = "index.html";
      }, 2000);

      contactForm.reset();
    } catch (error) {
      alert("Submission failed. Try again.");
      console.error(error);
    }
  });
});
