<div align="center">

![header](https://capsule-render.vercel.app/api?type=waving&color=gradient&height=140&section=header&text=Lista%20de%20tareas&fontSize=40&fontColor=ffffff)

### ✅ Anota tus tareas y no las pierdas al recargar ✅

Agrega, tacha y borra tareas. Todo queda guardado en tu navegador 📝

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</div>

<div align="center">
  <img src="./assets/demo.gif" alt="Demostración de la lista de tareas agregando, tachando y borrando tareas" width="400" />
</div>

## 🌐 Demo

👉 [Ver el proyecto en vivo](https://michael-scs.github.io/toDo-List/)

## 🌟 ¿Qué hace?

| Acción                  | Qué pasa                                    |
| ----------------------- | ------------------------------------------- |
| ➕ **Registrar**        | Agrega una tarea (con el botón o con Enter) |
| ✔️ **Clic en la tarea** | La marca como hecha o la desmarca           |
| 🗑️ **Borrar**           | Elimina esa tarea                           |

- 🚫 No deja registrar tareas vacías ni formadas solo por espacios, y muestra un aviso.
- 💾 Las tareas quedan guardadas en el navegador, así que siguen ahí al recargar la página.
- ♿ Cada botón "Borrar" tiene un `aria-label` con el nombre de su tarea, para quien usa lector de pantalla.

## 🛠️ Tecnologías

- 🧱 **HTML:** formulario, lista y mensajes de aviso
- 🎨 **CSS:** estilo de las tareas hechas
- ⚡ **JavaScript:** manipulación del DOM, eventos, arrays y objetos
- 💾 **localStorage + JSON:** para guardar las tareas en el navegador

## 🚀 Cómo ejecutarlo

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Michael-SCS/[nombre-del-repo].git
   ```
2. Entra a la carpeta:
   ```bash
   cd [nombre-del-repo]
   ```
3. Abre `index.html` en tu navegador 🎉

<details>
<summary>📁 Estructura del proyecto</summary>

```
[nombre-del-repo]/
├── index.html
├── style.css
├── index.js
└── README.md
```

</details>

## 🧠 Cómo funciona

Las tareas se guardan en un **array de objetos**, y la pantalla solo las dibuja a partir de él:

```javascript
{ texto: "Estudiar", hecha: false }
```

Cada vez que algo cambia (agregar, tachar o borrar), el programa actualiza el array, lo guarda en `localStorage` y vuelve a dibujar la lista. Al abrir la página, lee lo guardado y lo dibuja.

## 💡 Lo que aprendí

- 🔎 [Por qué las tareas viven en un array y la pantalla solo las dibuja]
- 💾 [Para qué sirven `JSON.stringify` y `JSON.parse` con `localStorage`]
- 🖱️ [Qué hace `e.stopPropagation()` y por qué hizo falta en el botón de borrar]
- 🐛 [Qué error te costó más y cómo lo resolviste]

## 👩‍💻 Autor

<div align="center">

**Michael Castillo**

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Michael-SCS)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mscastillosaldarriaga/)
[![Correo](https://img.shields.io/badge/Correo-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:michaelsteven3211@gmail.com)

Hecho con 💜 y mucho café frío

</div>
