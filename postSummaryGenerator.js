/*
TODO : 
- améliorer le code (faire des vrais noeuds plutôt que du InnerHTML)
    OU
- trouver un moyen de générer ce contenu de manière statique
*/
const list = document.querySelectorAll("h2, h3, h4, h5");

let output = "<ul>";
for (el of list) {
    const num_h = parseInt(el.nodeName.match(/\d/));

    output += "<li>"
    for(let i=2; i<num_h; i++){
        output += "--"
    }
    output += " <a href=#" + el.id + ">" + el.textContent + "</a></li>" 
}

output += "</ul>";

document.getElementById("articleSummary").innerHTML = output;