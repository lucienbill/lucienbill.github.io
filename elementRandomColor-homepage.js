const disclaimer = "I did not create this ; Origin = https://cassidoo.co/script.js"
const colorsLight =
     [
        "rgb(0, 54, 150)", //blue
        "rgb(0, 98, 106)", //teal
        "rgb(138, 71, 0)", //orange
        "rgb(174, 0, 122)", //pink
        "rgb(35, 106, 0)", //green
        "rgb(135, 0, 0)" //red
    ]
const colorsDark = 
     [
        "rgb(139, 168, 220)", //blue
        "#24a6b0", //teal
        "#cb8736", //orange
        "rgb(199, 177, 0)", //yellow
        "rgb(76, 191, 20)", //green
        "rgb(229, 145, 156)" //red
     ]


function setRandomElementColor() {
    let currentTheme = "light"
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        currentTheme = "dark";
    }
    elements = Array.from(document.querySelectorAll("a, h1, h2, h3, h4, h5, strong, .randomcolor"))

    for (let index = 0; index < elements.length; index++) { // Faster than foreach
        elements[index].style.color = getRandomColor(currentTheme);
    }
}

function getRandomColor(theme="light") {
    if (theme == "light"){
        return colorsLight[Math.floor(Math.random() * colorsLight.length)];
    } else {
        return colorsDark[Math.floor(Math.random() * colorsDark.length)];
    }
}

function setEventsListener() {
    // hover
    elements = Array.from(document.querySelectorAll("a, button"))
    
    for (let index = 0; index < elements.length; index++) { // Faster than foreach
        elements[index].addEventListener("mouseover", setRandomElementColor)
    }

    // change theme
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        setRandomElementColor()
    });

}


setRandomElementColor();
setEventsListener();