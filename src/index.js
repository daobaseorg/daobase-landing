const inputContainer = document.querySelector(".main-input-container");
const emailInput = document.getElementById("senderEmail");
function SendMail() {
  if (emailInput.value.length < 3 || !emailInput.value.includes("@")) {
    return;
  }
  var templateParams = {
    sender_email: emailInput.value,
  };

  emailjs.send("service_c1r5od5", "template_2ovtlqp", templateParams).then(
    function (response) {
      inputContainer.style.boxShadow = "none";
      inputContainer.style.background = "none";
      inputContainer.innerHTML = `<p class="success-message"><span class="success-span">Congratulations!</span> You will be notified when we launch</p>`;
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
}
