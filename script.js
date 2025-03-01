document.querySelector('.scroll-down').addEventListener('click', function() {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  });
  
  // Fade-in animation on scroll
  document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    function checkFade() {
      fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    }
    
    // Initial check
    checkFade();
    
    window.addEventListener('scroll', checkFade);
  });
  
  // Make the ingredient slider draggable
  const slider = document.querySelector('.ingredient-slider');
  let isDown = false;
  let startX;
  let scrollLeft;
  
  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  
  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  
  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  
  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    slider.scrollLeft = scrollLeft - walk;
  });
  
  // Add touch support for mobile devices
  slider.addEventListener('touchstart', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  
  slider.addEventListener('touchend', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  
  slider.addEventListener('touchcancel', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  
  slider.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.touches[0].pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
  });