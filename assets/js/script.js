document.addEventListener("DOMContentLoaded", function () {
    fetch("/navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;

            let basePath = window.location.pathname.split("/").slice(0, -1).join("/") + "/";
            document.querySelectorAll("#navbar-container a").forEach(link => {
                let href = link.getAttribute("href");
                if (href && !href.startsWith("http") && !href.startsWith("/")) {
                    link.setAttribute("href", basePath + href);
                }
            });

            let navbarToggler = document.querySelector(".navbar-toggler");
            let navbarCollapse = document.querySelector(".navbar-collapse");
        })
        .catch(error => console.error("Error loading navbar:", error));
});
