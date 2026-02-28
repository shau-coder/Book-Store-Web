document.addEventListener("DOMContentLoaded", () => {

  // Book hover animation
  document.querySelectorAll(".book-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-8px) scale(1.05)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
    });
  });

  // Sidebar active menu
  const links = document.querySelectorAll(".nav-item a");

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      links.forEach(l => l.parentElement.classList.remove("active"));
      link.parentElement.classList.add("active");
    });
  });

  // Start reading button animation
  const btn = document.querySelector(".start-reading-btn");

  btn.addEventListener("click", () => {
    btn.innerHTML = "Loading...";
    setTimeout(() => {
      btn.innerHTML = "Start reading →";
    }, 2000);
  });

});
