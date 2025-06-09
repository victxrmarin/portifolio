const progressBar = document.getElementById("scrollProgressBar");
let scrollTimeout;

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;

  progressBar.style.height = `${scrollPercent}%`;
  progressBar.style.opacity = 1;

  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    progressBar.style.opacity = 0;
  }, 1000);
});
