const disclaimer = "I did not create this ; Origin = https://cassidoo.co/script.js"

function setRandomLinkColor() {
    let currentTheme = localStorage.getItem("data-theme") || "default";
    Array.from(document.getElementsByTagName("a")).forEach((e) => {
        e.style.color = getRandomColor(currentTheme);
    });
}

function getRandomColor(theme="light") {
    const allColors = { // R G B
        light : 
         [
            "DarkRed ", "Chocolate",
            "SeaGreen",
            "SlateBlue", "SteelBlue"
        ],
         dark : 
         [
             "IndianRed ", "DarkGoldenRod",
             "MediumSeaGreen",
             "DarkCyan", "MediumPurple"
         ],
    } 
    let colors = []
    if (theme == "light"){
        colors = allColors.light
    } else {
        colors = allColors.dark
    }
    return colors[Math.floor(Math.random() * colors.length)];
}

function setColorHoverListener() {
    Array.from(document.querySelectorAll("a, button")).forEach((e) => {
    e.addEventListener("mouseover", setRandomLinkColor);
});
}

setRandomLinkColor();
setColorHoverListener();