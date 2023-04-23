(function () {
    // Set the theme based on the value stored in localStorage (if any)
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
        document.body.classList.add(currentTheme);
    }

    // Add click event listeners to the controls
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });

    // Add click event listener to the theme button
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        const newTheme = document.body.classList.contains("light-mode") ? "light-mode" : "dark-mode";
        localStorage.setItem("theme", newTheme);
    })
})();
