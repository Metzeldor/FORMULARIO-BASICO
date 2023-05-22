document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector(".login");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      var usuarioCorreo = document.querySelector(".login__input[type='text']").value;
      var contraseña = document.querySelector(".login__input[type='password']").value;
  
      if (usuarioCorreo.trim() === "" || contraseña.trim() === "") {
        alert("Por favor, completa todos los campos.");
        return;
      }
  
      window.location.href = "dashboard.html";
    });
  });
  