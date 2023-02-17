document.getElementById("login-btn").addEventListener("click", function () {
  let email = document.getElementById("email-field").value;
  let password = document.getElementById("password-field").value;
  if (email === "abc@gmail.com" && password === "secret") {
    window.alert("SuccesFull Login Now")
    window.location.href = "/bank.html";
    
  } else {
    console.log("Not Valid User");
  }
  email.value = "";
  password.value = "";
});
