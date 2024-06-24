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
    let currentTheme = localStorage.getItem("data-theme") || "default";
    elements = Array.from(document.querySelectorAll("a, h1, h2, h3, h4, h5, strong, .specialButton .randomcolor"))

    if (currentTheme == "light"){
        shuffle(colorsLight)
    } else {
        shuffle(colorsDark)
    }

    for (let index = 0; index < elements.length; index++) { // Faster than foreach
        elements[index].style.color = getColorRoundRobin(currentTheme, index);
    }
}

function shuffle(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
}

function getColorRoundRobin(theme="light", index) {
    if (theme == "light"){
        return colorsLight[index % colorsLight.length];
    } else {
        return colorsDark[index % colorsDark.length];
    }
}

function setColorHoverListener() {
    Array.from(document.querySelectorAll("a, button")).forEach((e) => {
    e.addEventListener("mouseover", setRandomElementColor);
});
}

setRandomElementColor();
setColorHoverListener();