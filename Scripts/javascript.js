// Load shared nav into <div id="nav-component"></div>
const isSubpage = window.location.pathname.includes("/new_pages/");
const navPath = isSubpage ? "../components/nav.html" : "components/nav.html";

fetch(navPath)
  .then((response) => {
    if (!response.ok) throw new Error(`HTTP ${response.status} loading ${navPath}`);
    return response.text();
  })
  .then((data) => {
    const mount = document.getElementById("nav-component");
    if (!mount) throw new Error('Missing <div id="nav-component"></div> in this page');

    mount.innerHTML = data;

    const hamburger = document.getElementById("hamburger");
    const navlist = document.getElementById("nav-list");

    // Only attach if the elements exist (prevents silent crashes)
    if (hamburger && navlist) {
      hamburger.addEventListener("click", () => {
        navlist.classList.toggle("active");
      });
    }
  })
  .catch((error) => console.error("Nav didn't load:", error));
