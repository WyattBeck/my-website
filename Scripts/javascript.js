fetch("../components/nav.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("nav-component").innerHTML = data;

    const hamburger = document.getElementById("hamburger");
    const navlist = document.getElementById("nav-list");

    hamburger.addEventListener("click", () => {
      navlist.classList.toggle("active");
    });
  })
  .catch(error => console.error("Nav didn't load", error));