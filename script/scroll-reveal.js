  function handleReveal() {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(el => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const elementBottom = el.getBoundingClientRect().bottom;
      const revealPoint = 100;

      if (elementTop < windowHeight - revealPoint && elementBottom > 0) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');

      }
    });
  }

  window.addEventListener("scroll", handleReveal)
   window.addEventListener("load", handleReveal)

function revealPhoto() {
    const elements = document.querySelectorAll(".photo-slide");

    elements.forEach(el => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const visibilityThreshold = 150;

      if (elementTop < windowHeight - visibilityThreshold) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealPhoto);
  window.addEventListener("load", revealPhoto);