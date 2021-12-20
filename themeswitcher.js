// theme switcher
const themeSwitcher = document.getElementById("themeSwitcher")
const page = document.getElementsByTagName("html")[0];
let currentTheme = localStorage.getItem("data-theme") || "default";
const lightLogo = "🔆"
const darkLogo = "🌒"

if ((window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && currentTheme=="default") || currentTheme=="dark") {
  // dark mode
  themeSwitcher.innerText = lightLogo
  switchTheme(true)
} else {
  //light mode
  themeSwitcher.innerText = darkLogo
  switchTheme(true)
}

themeSwitcher.addEventListener("click", () => {switchTheme()})

function switchTheme(notranstion=false){
    if (!notranstion){
        document.querySelector(':root').style.setProperty('--themeswitchtransition', '0.25s');
    }

    if (themeSwitcher.innerText == lightLogo) {
        themeSwitcher.innerText = darkLogo
        currentTheme = "dark"
    } else {
        themeSwitcher.innerText = lightLogo
        currentTheme = "light"
    }
    page.setAttribute("data-theme", currentTheme);
    localStorage.setItem("data-theme", currentTheme);
}