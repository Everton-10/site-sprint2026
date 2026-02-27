document.addEventListener("DOMContentLoaded", function () {
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  if (daysEl && hoursEl && minutesEl && secondsEl) {
    const eventDate = new Date("2026-10-18T08:00:00").getTime();

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        return;
      }

      daysEl.innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
      hoursEl.innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      minutesEl.innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      secondsEl.innerText = Math.floor((distance % (1000 * 60)) / 1000);
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav ul");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
      const isOpen = navMenu.classList.toggle("menu-open");
      menuToggle.classList.toggle("active", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.innerWidth <= 768) {
          navMenu.classList.remove("menu-open");
          menuToggle.classList.remove("active");
          menuToggle.setAttribute("aria-expanded", "false");
        }
      });
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 768) {
        navMenu.classList.remove("menu-open");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  const track = document.getElementById("carouselTrack");
  const firstSponsor = document.querySelector(".sponsor");

  if (track && firstSponsor) {
    let index = 0;

    function moveCarousel() {
      const sponsorWidth = firstSponsor.offsetWidth + 60;
      index++;

      if (index >= track.children.length) {
        index = 0;
      }

      track.style.transform = `translateX(-${index * sponsorWidth}px)`;
    }

    setInterval(moveCarousel, 3000);
  }

  const input = document.getElementById("searchInput");

  if (input) {
    input.addEventListener("keyup", function () {
      const filtro = input.value.toLowerCase();
      const linhas = document.querySelectorAll(".linha-cat");

      linhas.forEach(function (linha) {
        const texto = linha.innerText.toLowerCase();
        linha.style.display = texto.includes(filtro) ? "" : "none";
      });
    });
  }
});

// funcao zap fixo
function enviarWhats(event) {
  if (event) {
    event.preventDefault();
  }

  const nomeInput = document.getElementById("nome");
  const nome = nomeInput ? nomeInput.value : "";
  const msg = `Ola! Meu nome e ${nome} e quero competir na Sprint MTB`;
  const url = `https://wa.me/551938955647?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}