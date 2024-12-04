document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header");
  const headerHeight = header.offsetHeight;
  document.documentElement.style.setProperty(
    "--header-height",
    `${headerHeight}px`
  );
});
