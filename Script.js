const surpriseButton = document.getElementById("surpriseButton");
const surprise = document.getElementById("surprise");

surpriseButton.addEventListener("click", () => {
  surprise.classList.toggle("hidden");

  surpriseButton.textContent = surprise.classList.contains("hidden")
    ? "Abrir mi sorpresa ✨"
    : "Cerrar sorpresa";

  if (!surprise.classList.contains("hidden")) {
    surprise.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }
});

document.getElementById("musicButton").addEventListener("click", () => {
  alert("En la siguiente versión agregaremos música personalizada 🎵");
});
