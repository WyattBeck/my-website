fetch('./nav.html')
  .then((response) => response.text())
  .then((data) => {
    const mount = document.getElementById("nav-component");
    mount.innerHTML = data;

    const hamburger = document.getElementById("hamburger");
    const navlist = document.getElementById("nav-list");

    // Only attach if the elements exist (prevents silent crashes)
    hamburger.addEventListener("click", () => {
      navlist.classList.toggle("active");
    })
  })
  .catch((error) => console.error("Nav didn't load:", error));
