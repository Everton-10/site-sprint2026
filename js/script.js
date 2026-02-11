const track = document.getElementById("carouselTrack");
let index = 0;

function moveCarousel() {
  const sponsorWidth = document.querySelector(".sponsor").offsetWidth + 60;
  index++;

  if (index >= track.children.length) {
    index = 0;
  }

  track.style.transform = `translateX(-${index * sponsorWidth}px)`;
}

setInterval(moveCarousel, 3000);

// filtro pagina categorias//

const input = document.getElementById("searchInput");

input.addEventListener("keyup", function () {
  const filtro = input.value.toLowerCase();
  const linhas = document.querySelectorAll(".linha-cat");

  linhas.forEach(linha => {
    const texto = linha.innerText.toLowerCase();
    linha.style.display = texto.includes(filtro) ? "" : "none";
  });
});
// funcao zap fixo//
function enviarWhats() {
  let nome = document.getElementById("nome").value;
  let msg = `Olá! Meu nome é ${nome} e quero competir na Sprint MTB`;
  let url = `https://wa.me/551938955647?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}
