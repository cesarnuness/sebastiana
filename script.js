import renderGestao from "./view/viewGestao.js";
import view from "./view/view.js";

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
const body = document.getElementById("body");

equipe.addEventListener("click", function () {
  body.innerHTML = "";
  body.innerHTML = renderGestao();
});
