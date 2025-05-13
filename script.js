document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links a');

  // Toggle del menú
  toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  // Ocultar el menú al hacer clic en cualquier enlace (solo móvil)
  navItems.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navLinks.classList.remove('show');
      }
    });
  });
});










document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-track .tarjeta');
  const dotsContainer = document.querySelector('.carousel-dots');

  let currentIndex = 0;

  function updateCarousel(index) {
    const slideWidth = slides[0].offsetWidth;
    track.style.transform = `translateX(-${slideWidth * index}px)`;

    dotsContainer.querySelectorAll('button').forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  // Crear botones de navegación
  slides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateCarousel(currentIndex);
    });
    dotsContainer.appendChild(dot);
  });

  // Activar primero
  updateCarousel(currentIndex);

  window.addEventListener('resize', () => updateCarousel(currentIndex));
});

