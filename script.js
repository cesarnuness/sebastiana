import renderEquipe from "./src/view/viewEquipe.mjs";
import renderInicio from "./src/view/viewInicio.mjs";
import renderSimulados from "./src/view/viewSimulados.mjs";
import renderGaleria from "./src/view/viewGaleria.mjs";

const inicio = document.getElementById("btn--inicio");
const simulados = document.getElementById("btn--simulados");
const equipe = document.getElementById("btn--equipe");
const galeria = document.getElementById("btn--galeria");
const principal = document.querySelector(".principal");

function renderContent(content) {
  principal.innerHTML = "";
  principal.insertAdjacentHTML("beforeend", content);
}

inicio.addEventListener("click", () => {
  renderContent(renderInicio());
});

equipe.addEventListener("click", () => {
  renderContent(renderEquipe());
});

simulados.addEventListener("click", () => {
  renderContent(renderSimulados());
});

galeria.addEventListener("click", () => {
  renderContent(renderGaleria());
});
