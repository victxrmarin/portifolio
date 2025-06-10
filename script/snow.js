window.onload = function() {
  const canvas = document.getElementById('snowCanvas');
  const ctx = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  class Snowflake {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * -canvas.height;
      this.radius = Math.random() * 3 + 1;
      this.speedY = Math.random() * 1 + 0.5;
      this.speedX = Math.random() * 0.5 - 0.25;
      this.angle = Math.random() * 2 * Math.PI;
      this.swingSpeed = Math.random() * 0.02 + 0.01;
    }

    update() {
      this.y += this.speedY;
      this.x += Math.sin(this.angle) * this.speedX;
      this.angle += this.swingSpeed;

      if (this.y > canvas.height) {
        this.reset();
        this.y = 0;
      }
      if (this.x > canvas.width) this.x = 0;
      if (this.x < 0) this.x = canvas.width;
    }

    draw() {
      ctx.beginPath();
      ctx.fillStyle = 'white';
      ctx.shadowColor = 'rgba(255,255,255,0.5)';
      ctx.shadowBlur = 5;
      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      ctx.fill();
    }
  }

  const snowflakes = [];
  const maxFlakes = 150;

  for (let i = 0; i < maxFlakes; i++) {
    snowflakes.push(new Snowflake());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snowflakes.forEach(flake => {
      flake.update();
      flake.draw();
    });
    requestAnimationFrame(animate);
  }

  animate();
}
