(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault(); // prevent default link behavior
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
            window.location.href = this.children[0].href; // navigate to new page
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        // store theme preference in local storage
        localStorage.setItem("theme", document.body.classList.contains("light-mode") ? "light" : "dark");
    });
    // set theme based on stored preference, default to dark if not set
    const theme = localStorage.getItem("theme") || "dark";
    if (theme === "light") {
        document.body.classList.add("light-mode");
    }
})();
