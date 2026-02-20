const sections = document.querySelectorAll("h2[id]");
const tocLinks = document.querySelectorAll(".toc a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    if (scrollY >= sec.offsetTop - 160) {
      current = sec.id;
    }
  });

  tocLinks.forEach(link => {
    link.style.color =
      link.getAttribute("href") === `#${current}`
        ? "#38bdf8"
        : "#c7d2fe";
  });
});
