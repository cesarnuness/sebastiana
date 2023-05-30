import renderEquipe from "./src/view/viewEquipe.mjs";
import renderInicio from "./src/view/viewInicio.mjs";

// // JavaScript code for infinite scrolling
// let newsContainer = document.getElementById("news-container");
// let newsContent = document.getElementById("news-content");

// newsContainer.addEventListener("scroll", function () {
//   if (
//     newsContainer.scrollTop + newsContainer.clientHeight >=
//     newsContent.offsetHeight
//   ) {
//     // When the user reaches the bottom of the container, add more news content
//     newsContent.innerHTML += newsContent.innerHTML; // Append the existing news content
//   }
// });

const inicio = document.getElementById("btn--inicio");
const simulados = document.getElementById("btn--simulados");
const equipe = document.getElementById("btn--equipe");
const galeria = document.getElementById("btn--galeria");
const principal = document.querySelector(".principal");

equipe.addEventListener("click", function () {
  principal.innerHTML = "";
  principal.insertAdjacentHTML("beforeend", renderEquipe());
});

inicio.addEventListener("click", function () {
  principal.innerHTML = "";
  principal.insertAdjacentHTML("beforeend", renderInicio());
});

simulados.addEventListener("click", function () {
  // Add your code here for the "Simulados" button functionality
});

galeria.addEventListener("click", function () {
  // Add your code here for the "Galeria" button functionality
});
