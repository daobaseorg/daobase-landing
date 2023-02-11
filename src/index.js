const inputContainer = document.querySelector(".main-input-container");

function SendMail() {
  var templateParams = {
    sender_email: document.getElementById("senderEmail").value,
  };

  console.log(templateParams);

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
