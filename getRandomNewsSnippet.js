const workerUrl = "https://getrandomnewssnippet.lucienbill.workers.dev/"
const pageInfo = "<details><summary>A propos de cette page</summary><p>Cette page affiche un extrait aléatoire, pioché dans ma newsletter.</p></details>"

// sending request
fetch(workerUrl).then((response)=>{  return response.json();  // converting byte data to json
}).then(data=>{
    (document.getElementById("dynamicContent").innerHTML = pageInfo + data)
    setRandomElementColor();
    setColorHoverListener();
})
