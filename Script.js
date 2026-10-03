document.addEventListener("DOMContentLoaded", function () {

  const loadingScreen = document.getElementById("loadingScreen");
  const mainContent = document.getElementById("mainContent");

  const progressNumber = document.getElementById("progressNumber");
  const progressBar = document.getElementById("progressBar");
  const progressCircle = document.getElementById("progressCircle");
  const loadingText = document.getElementById("loadingText");

  const surpriseButton = document.getElementById("surpriseButton");
  const surprise = document.getElementById("surprise");

  let progress = 0;

  const messages = [
    "Cargando una sorpresa especial...",
    "Preparando un poquito de magia...",
    "Llenando todo de girasoles...",
    "Preparando tus recuerdos...",
    "Guardando mucho cariño...",
    "Ya casi está...",
    "Todo está listo para ti 🌻"
  ];

  const circleLength = 515;

  const timer = setInterval(function () {

    progress++;

    progressNumber.textContent = progress + "%";

    progressBar.style.width = progress + "%";

    const circleOffset =
      circleLength - (circleLength * progress / 100);

    progressCircle.style.strokeDashoffset = circleOffset;


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


    if (progress >= 100) {

      clearInterval(timer);

      loadingText.textContent =
        "Todo está listo para ti 🌻";

      setTimeout(function () {

        loadingScreen.classList.add("fade-out");

        setTimeout(function () {

          loadingScreen.style.display = "none";

          mainContent.classList.remove("hidden");

          window.scrollTo(0, 0);

        }, 1000);

      }, 800);
    }

  }, 50);


  // BOTÓN DE SORPRESA

  if (surpriseButton && surprise) {

    surpriseButton.addEventListener("click", function () {

      if (surprise.classList.contains("hidden")) {

        surprise.classList.remove("hidden");

        surpriseButton.textContent =
          "Cerrar sorpresa 🌻";

        surprise.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });

      } else {

        surprise.classList.add("hidden");

        surpriseButton.textContent =
          "Abrir mi sorpresa ✨";

      }

    });

  }

});
