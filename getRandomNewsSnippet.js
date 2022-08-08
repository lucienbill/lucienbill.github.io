const workerUrl = "https://getrandomnewssnippet.lucienbill.workers.dev/"
const pageInfo = "<details><summary>A propos de cette page</summary><p>Cette page affiche un extrait aléatoire, pioché dans ma newsletter.</p></details>"

function findGetParameter(parameterName) {
    const url = location.toString().split("?")
    if (url.length < 2){
        return null
    }
    const param = url[1].split("&")

    for (p of param){
        const pair = p.split("=")
        if (pair[0] == parameterName){
            return decodeURIComponent(pair[1])
        }
    }
    return null
}

async function displaySnippet(fetchkey=null){
    // Display an element from the database: a specific key, or random
    let response = null
    if (fetchkey != null){
        const options = {
            headers: {
                key: `${fetchkey}`
            }
        }
        response = await fetch(workerUrl, options)
    } else {
        response = await fetch(workerUrl)
    }
    const key = response.headers.get("key")
    let footer = ""
    if (key != null){
        footer = `<hr><p>Cet extrait vous plait ? <a title="lien vers cet\
 extrait" href="${location.toString().split("?")[0].replace('#', '')}?key=${key}" target:\
 blank>Partagez-le</a> !<br>Vous pouvez aussi cliquer <a onclick=\
 'displaySnippet()' title='afficher un autre extrait' href='#'>ici</a> pour\
  afficher un autre extrait.<p>`
    }
    document.getElementById("dynamicContent").innerHTML = pageInfo + await response.json() + footer

    setRandomElementColor();
    setColorHoverListener();
}

displaySnippet(findGetParameter("key"))
