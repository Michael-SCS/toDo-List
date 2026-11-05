const formulario = document.getElementById("formularioTarea");
const inputUsuario = document.getElementById("tarea");
const listaUsuario = document.getElementById("listaTarea");
const alertaEspacioVacio = document.getElementById("mensajes");
const guardado = localStorage.getItem("tareas");
const tareas = guardado ? JSON.parse(guardado) : [];
formulario.addEventListener("submit", agregarTarea);

function agregarTarea(e) {
  e.preventDefault();

  const textoTarea = inputUsuario.value.trim();
  if (textoTarea === "") {
    alertaEspacioVacio.textContent = "Escribe una tarea antes de registrar.";
  } else {
    alertaEspacioVacio.textContent = "";
    tareas.push(textoTarea); // 1. anotar en el cuaderno
    localStorage.setItem("tareas", JSON.stringify(tareas));
    mostrarTareas(); // 2. copiar el cuaderno a la pizarra
    inputUsuario.value = ""; // 3. limpiar el campo
  }
}

function mostrarTareas() {
  listaUsuario.replaceChildren();
  for (const tarea of tareas) {
    const li = document.createElement("li");
    li.textContent = tarea;
    listaUsuario.append(li);
  }
}

function tacharTarea(e) {
  e.currentTarget.classList.toggle("hecha");
}

function borrarBoton(e) {
  e.stopPropagation();
  e.currentTarget.parentElement.remove();
}
mostrarTareas();
