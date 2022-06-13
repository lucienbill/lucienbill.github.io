const disclaimer = "I did not create this ; Origin = https://cassidoo.co/script.js"
const colorsLight =
     [
        // "DarkRed ", "Chocolate", //R
        // "SeaGreen", //G
        // "SlateBlue", "SteelBlue" //B
        "#bf415f", "#d44652", //Red
        "#93407c", //purple
        "#615bac", "#433db0" //Blue
    ]
const colorsDark = 
     [
        //  "IndianRed ", "DarkGoldenRod", //R
        //  "MediumSeaGreen", //G
        //  "DarkCyan", "MediumPurple" //B
        "#9c6572", "#891f4f", //Red
        "#85498c", //purple
        "#4e6b63", "#326875" //Blue
     ]


function setRandomLinkColor() {
    let currentTheme = localStorage.getItem("data-theme") || "default";
    Array.from(document.getElementsByTagName("a")).forEach((e) => {
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
    e.addEventListener("mouseover", setRandomLinkColor);
});
}

setRandomLinkColor();
setColorHoverListener();