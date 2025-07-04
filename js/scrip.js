 const menuButton = document.getElementById('menuButton');
  const menuCollapse = document.getElementById('menuCollapse');

  menuCollapse.addEventListener('show.bs.collapse', () => {
    menuButton.classList.add('d-none');
  });

  // Si quieres que reaparezca el botón al cerrar el menú, usa esto también:
  menuCollapse.addEventListener('hide.bs.collapse', () => {
    menuButton.classList.remove('d-none');
  });


nav_cel.addEventListener('click', () => {
    navlist.classList.toggle('active');
});


  function validarFormulario() {
                const email = document.getElementById("email").value;
                const phone = document.getElementById("phone").value;
                const mensajeEmail = document.getElementById("mensajeEmail");
                const mensajeTelefono = document.getElementById("mensajeTelefono");

                const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                const regexPhone = /^[0-9]{9}$/;

                let valido = true;

                if (!regexEmail.test(email)) {
                    mensajeEmail.textContent = "Email inválido.";
                    mensajeEmail.style.color = "red";
                    valido = false;
                } else {
                    mensajeEmail.textContent = "Email válido.";
                    mensajeEmail.style.color = "green";
                }

                if (!regexPhone.test(phone)) {
                    mensajeTelefono.textContent = "El teléfono debe tener 9 dígitos numéricos.";
                    mensajeTelefono.style.color = "red";
                    valido = false;
                } else {
                    mensajeTelefono.textContent = "Teléfono válido.";
                    mensajeTelefono.style.color = "green";
                }

                return valido;
            }