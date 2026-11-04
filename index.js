const formulario = document.getElementById("formularioTarea");
const inputUsuario = document.getElementById("tarea");
const listaUsuario = document.getElementById("listaTarea");
const alertaEspacioVacio = document.getElementById("mensajes");

formulario.addEventListener("submit", agregarTarea);

function agregarTarea(e) {
  e.preventDefault(); //Evita que la página se recargue al enviar el formulario

  const validarEspacios = inputUsuario.value.trim(); //Quita los espacios al inicio o final innecesarios
  if (validarEspacios === "") {
    //Valida que no se ingresen solo espacios
    alertaEspacioVacio.textContent = "Escribe una tarea antes de registrar.";
  } else {
    const crearTarea = document.createElement("li");
    alertaEspacioVacio.textContent = ""; //Borra el mensaje una vez se agrega
    crearTarea.textContent = validarEspacios;
    const borrarTarea = document.createElement("button");
    borrarTarea.type = "button";
    borrarTarea.textContent = "Borrar";
    borrarTarea.addEventListener("click", borrarBoton);
    borrarTarea.setAttribute(
      "aria-label",
      `Borrar la tarea ${validarEspacios}`,
    );
    crearTarea.append(borrarTarea);
    listaUsuario.append(crearTarea);
    inputUsuario.value = "";
    crearTarea.addEventListener("click", tacharTarea); //Al Li creado de le puede tachar
  }
}

function tacharTarea(e) {
  e.currentTarget.classList.toggle("hecha");
}

function borrarBoton(e) {
  e.stopPropagation();
  e.currentTarget.parentElement.remove();
}
