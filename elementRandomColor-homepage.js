const disclaimer = "I did not create this ; Origin = https://cassidoo.co/script.js"
const colorsLight =
     [
        "#5e8fe6", "#109ca7", //blue
        "#C57415", //orange
        "#51ae23", //green
        "#cb4f5e" //red
    ]
const colorsDark = 
     [
        "#527fcf", "#24a6b0", //bleu
        "#cb8736", //orange
        "#3ca409", //green
        "#9d3c48" //red
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