// theme switcher
const themeSwitcher = document.getElementById("themeSwitcher")
const page = document.getElementsByTagName("html")[0];
let currentTheme = localStorage.getItem("data-theme") || "default";

if ((window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && currentTheme=="default") || currentTheme=="dark") {
  // dark mode
  themeSwitcher.innerText = "🌒"
  currentTheme = "dark"
  page.setAttribute("data-theme",currentTheme);
} else {
  //light mode
  themeSwitcher.innerText = "💡"
  currentTheme = "light"
  page.setAttribute("data-theme",currentTheme);
}

themeSwitcher.addEventListener("click", () =>{
    if (themeSwitcher.innerText == "💡") {
        themeSwitcher.innerText = "🌒"
        currentTheme = "dark"
    } else {
        themeSwitcher.innerText = "💡"
        currentTheme = "light"
    }
    page.setAttribute("data-theme", currentTheme);
    localStorage.setItem("data-theme", currentTheme);
})