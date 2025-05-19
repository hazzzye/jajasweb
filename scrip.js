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
