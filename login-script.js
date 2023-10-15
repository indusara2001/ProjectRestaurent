document.addEventListener("DOMContentLoaded", function () {
   const loginModal = document.getElementById("loginModal");
   const loginForm = document.getElementById("loginForm");
   const loginBtn = document.querySelector('a[href="#faq"]');
   const closeBtn = document.querySelector(".close");

   loginBtn.addEventListener("click", function () {
      loginModal.style.display = "block";
   });

   closeBtn.addEventListener("click", function () {
      loginModal.style.display = "none";
   });

   loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const username = this.username.value;
      const password = this.password.value;

      // Hardcoded username and password for demo purposes
      const hardcodedUsername = "user";
      const hardcodedPassword = "password";

      if (username === hardcodedUsername && password === hardcodedPassword) {
         alert("Login successful! Welcome, " + username + "!");
         this.reset();
         loginModal.style.display = "none";
      } else {
         alert("Invalid username or password. Please try again.");
      }
   });
});
