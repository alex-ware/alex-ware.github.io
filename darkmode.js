const themeSwitch = document.getElementById("theme-switch");

const toggleDarkMode = () => {
  document.body.classList.toggle("darkmode");
  localStorage.setItem(
    "darkmode",
    document.body.classList.contains("darkmode") ? "active" : null
  );
};

// Initial check for dark mode
if (localStorage.getItem("darkmode") === "active") {
  document.body.classList.add("darkmode");
}

themeSwitch.addEventListener("click", toggleDarkMode);
