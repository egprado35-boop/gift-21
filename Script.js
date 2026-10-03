const loadingScreen = document.getElementById("loadingScreen");
const mainContent = document.getElementById("mainContent");

const progressNumber = document.getElementById("progressNumber");
const progressBar = document.getElementById("progressBar");
const progressCircle = document.getElementById("progressCircle");
const loadingText = document.getElementById("loadingText");

const surpriseButton = document.getElementById("surpriseButton");
const surprise = document.getElementById("surprise");


// ===============================
// CARGADOR 0% → 100%
// ===============================

let progress = 0;

const messages = [
  "Preparando una sorpresa especial...",
  "Buscando un poquito de magia...",
  "Llenando todo de girasoles...",
  "Preparando tus recuerdos...",
  "Guardando mucho cariño...",
  "Ya casi está...",
  "La sorpresa está lista 🌻"
];

const totalCircleLength = 515;

const loadingInterval = setInterval(() => {

  progress++;

  progressNumber.textContent = `${progress}%`;
  progressBar.style.width = `${progress}%`;

  const offset =
    totalCircleLength -
    (totalCircleLength * progress) / 100;

  progressCircle.style.strokeDashoffset = offset;


  // Cambiar mensajes durante la carga

  if (progress < 20) {
    loadingText.textContent = messages[0];
  } else if (progress < 35) {
    loadingText.textContent = messages[1];
  } else if (progress < 50) {
    loadingText.textContent = messages[2];
  } else if (progress < 65) {
    loadingText.textContent = messages[3];
  } else if (progress < 80) {
    loadingText.textContent = messages[4];
  } else if (progress < 95) {
    loadingText.textContent = messages[5];
  } else {
    loadingText.textContent = messages[6];
  }


  // Cuando llega al 100%

  if (progress >= 100) {

    clearInterval(loadingInterval);

    loadingText.textContent =
      "Todo está listo para ti 🌻";

    setTimeout(() => {

      loadingScreen.classList.add("fade-out");

      setTimeout(() => {

        loadingScreen.style.display = "none";

        mainContent.classList.remove("hidden");

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

      }, 1000);

    }, 900);
  }

}, 45);


// ===============================
// BOTÓN DE SORPRESA
// ===============================

surpriseButton.addEventListener("click", () => {

  const isHidden = surprise.classList.contains("hidden");

  if (isHidden) {

    surprise.classList.remove("hidden");

    surpriseButton.textContent =
      "Cerrar sorpresa 🌻";

    setTimeout(() => {

      surprise.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

    }, 100);

  } else {

    surprise.classList.add("hidden");

    surpriseButton.textContent =
      "Abrir mi sorpresa ✨";

  }

});
