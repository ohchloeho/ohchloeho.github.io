//! add functionality of detecting user time or adjusting to user dark mode settings

// dark mode button
const checkbox = document.getElementById("checkbox");

// sidebar & main page background
const sidebar = document.getElementById("sidebar");
const body = document.getElementById("main");

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    // dark mode
    sidebar.classList.add("dark-mode-sidebar");
    body.classList.add("dark-mode-main");
  } else {
    // light mode
    sidebar.classList.remove("dark-mode-sidebar");
    body.classList.remove("dark-mode-main");
  }
});
