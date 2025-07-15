// Mobile menu toggle
document.querySelector('.mobile-menu-toggle')?.addEventListener('click', () => {
  document.querySelector('.menu')?.classList.toggle('show');
});

// Active link styling
document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', function () {
    document.querySelectorAll('.menu a').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

// Scroll stats duplication for seamless loop
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector('.scroll-stats-track');
  if (!track) return;

  const originalContent = track.innerHTML;
  track.innerHTML += originalContent + originalContent;
});