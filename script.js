document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-contacto');
  const menuBtn = document.getElementById('btn-menu');
  const menu = document.getElementById('menu-desplegable');

  form?.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Gracias por contactarnos. Te responderemos pronto.');
    form.reset();
  });

  menuBtn?.addEventListener('click', () => {
    menu.classList.toggle('activo');
  });

  // OPCIONAL: cerrar al hacer clic fuera del menú
  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
      menu.classList.remove('activo');
    }
  });
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
