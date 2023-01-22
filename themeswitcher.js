// theme switcher
const themeSwitcher = document.getElementById("themeSwitcher")
const themeSwitcherIcon = document.getElementById("themeSwitcherIcon")
const page = document.getElementsByTagName("html")[0];
let currentTheme = localStorage.getItem("data-theme") || "default";
const lightLogo = "🔆"
const darkLogo = "🌒"

// set theme on loading page (no transition animation)
if ((window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && currentTheme=="default") || currentTheme=="dark") {
  // dark mode
  switchTheme("dark")
} else {
  //light mode
  switchTheme("light")
}

// activate theme transition animation
document.querySelector(':root').style.setProperty('--themeswitchtransition', '0.25s');

themeSwitcher.addEventListener("click", () => {switchTheme()})

function switchTheme(forcetheme="none"){
    if (themeSwitcherIcon.innerText == lightLogo || forcetheme=="dark") {
        themeSwitcherIcon.innerText = darkLogo
        currentTheme = "dark"
    } else {
        themeSwitcherIcon.innerText = lightLogo
        currentTheme = "light"
    }
    page.setAttribute("data-theme", currentTheme);
    localStorage.setItem("data-theme", currentTheme);
    try {
      setRandomElementColor();
    } catch (error) {
      // noop
    }
}
