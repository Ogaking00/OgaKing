const password = document.getElementById('email');
const username = document.getElementById("pwd");
const toggle = document.getElementById('pwdeye');
const form = document.getElementById('form');

  
function togglePasswordVisibility() {
  var passwordInput = document.getElementById("pwd");
  var eyeIcon = document.getElementById("pwdeye");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  }
}

  form.addEventListener('submit', function(event){
    event.preventDefault();

    if (email.value === '') {
        alert('Please enter your username.');
        username.focus();
        return false;
      }

      if (pwd.value === '') {
        alert('Please enter your password.');
        pwd.focus();
        return false;
      }

      if (password.value.length < 8) {
        alert('Password must be at least 8 characters long.');
        pwd.focus();
        return false;
      }

      alert("Form submitted successfully! you're logged in " + username.value + ".");
      console.log("Username: "+ email.value);
      console.log("Password: "+ pwd.value);
      form.reset();
      return true;
  });