const formulario = document.getElementById("formularioTarea");
const inputUsuario = document.getElementById("tarea");
const listaUsuario = document.getElementById("listaTarea");
const alertaEspacioVacio = document.getElementById("mensajes");

// Recupera las tareas guardadas para conservarlas al recargar la página.
const tareasGuardadas = localStorage.getItem("tareas");
const tareas = tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
formulario.addEventListener("submit", agregarTarea);

// Centraliza el guardado de las tareas en localStorage.
function guardarTareas() {
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

// Valida y agrega una nueva tarea.
function agregarTarea(e) {
  e.preventDefault();

  const textoTarea = inputUsuario.value.trim();
  if (textoTarea === "") {
    alertaEspacioVacio.textContent = "Escribe una tarea antes de registrar.";
  } else {
    alertaEspacioVacio.textContent = "";
    tareas.push({ texto: textoTarea, hecha: false });
    guardarTareas();
    mostrarTareas();
    inputUsuario.value = "";
  }
}

// Dibuja la lista y conecta las acciones de cada tarea.
function mostrarTareas() {
  listaUsuario.replaceChildren();
  for (const tarea of tareas) {
    const li = document.createElement("li");
    li.textContent = tarea.texto;
    const boton = document.createElement("button");
    boton.type = "button";
    boton.textContent = "Borrar";
    boton.setAttribute("aria-label", `Borrar la tarea ${tarea.texto}`);
    boton.addEventListener("click", function (e) {
      e.stopPropagation(); // Evita que el clic también marque la tarea.
      const posicion = tareas.indexOf(tarea);
      tareas.splice(posicion, 1);
      guardarTareas();
      mostrarTareas();
    });
    li.append(boton);
    listaUsuario.append(li);
    if (tarea.hecha) {
      li.classList.add("hecha");
    }
    li.addEventListener("click", function () {
      tarea.hecha = !tarea.hecha; // Alterna el estado completado.
      guardarTareas();
      mostrarTareas();
    });
  }
}

// Muestra las tareas guardadas al cargar la página.
mostrarTareas();
