const disclaimer = "I did not create this ; Origin = https://cassidoo.co/script.js"
const colorsLight =
     [
        "#bf415f", "#d44652", //Red
        "#93407c", //purple
        "#615bac", "#433db0" //Blue
    ]
const colorsDark = 
     [
        "#b48b96", "#aeb48b",
        "#b48ba9",
        "#8e8bb4", "#8bb4a8"
     ]


function setRandomElementColor() {
    let currentTheme = localStorage.getItem("data-theme") || "default";
    Array.from(document.querySelectorAll("a, h1, h2, h3, h4, h5, strong, .specialButton")).forEach((e) => {
        e.style.color = getRandomColor(currentTheme);
    });
}

function getRandomColor(theme="light") {
    if (theme == "light"){
        return colorsLight[Math.floor(Math.random() * colorsLight.length)];
    } else {
        return colorsDark[Math.floor(Math.random() * colorsDark.length)];
    }
}

function setColorHoverListener() {
    Array.from(document.querySelectorAll("a, button")).forEach((e) => {
    e.addEventListener("mouseover", setRandomElementColor);
});
}

setRandomElementColor();
setColorHoverListener();