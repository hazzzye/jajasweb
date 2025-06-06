const openButton = document.getElementById('open-sidebar-button');
const closeButton = document.getElementById('close-sidebar-button');
const navbar = document.getElementById('navbar');
const overlay = document.getElementById('overlay');

function openSidebar() {
  navbar.classList.add('show');
  overlay.classList.add('show');
  openButton.setAttribute('aria-expanded', 'true');
}

function closeSidebar() {
  navbar.classList.remove('show');
  overlay.classList.remove('show');
  openButton.setAttribute('aria-expanded', 'false');
}

openButton.addEventListener('click', openSidebar);
closeButton.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

// Marcar enlace activo
document.querySelectorAll('nav a').forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active-link');
  }
});


document.addEventListener("DOMContentLoaded", function () {
  let indiceActual = 0;
  const slides = document.querySelectorAll('.slide');

  function mostrarSlide(n) {
    slides.forEach((slide, index) => {
      slide.classList.remove('active');
      if (index === n) slide.classList.add('active');
    });
  }

  function cambiarSlide() {
    indiceActual = (indiceActual + 1) % slides.length;
    mostrarSlide(indiceActual);
  }

  mostrarSlide(indiceActual);
  setInterval(cambiarSlide, 5000);
});

document.addEventListener('DOMContentLoaded', () => {
  const servicios = document.querySelectorAll('.servicio');
  const fondo = document.getElementById('imagen-servicio');
  const descripcion = document.getElementById('descripcion-servicio');

  servicios.forEach(servicio => {
    servicio.addEventListener('mouseenter', () => {
      const img = servicio.getAttribute('data-img');
      const text = servicio.getAttribute('data-text');
      fondo.style.backgroundImage = `url(${img})`;
      descripcion.innerHTML = `<h3>${servicio.textContent}</h3><p>${text}</p>`;
    });
  });
});