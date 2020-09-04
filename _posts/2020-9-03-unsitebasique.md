---
layout: post
title: Un site basique - pourquoi ?
---

## tl;dr
Pourquoi mon site est-il si basique ? Je pourrais m'inspirer des [templates de SquareSpace](https://fr.squarespace.com/modeles) : beaucoup de photos et d'animations, ça en jette. J'ai pourtant choisi de faire autrement, et pas uniquement parce que je suis fainéant.

## Toujours Plus

D'autres que moi l'ont constaté : malgré nos connexions de plus en plus rapides, [les sites internets modernes sont lents](https://www.reddit.com/r/technology/comments/3z6gwy/the_website_obesity_crisis_why_the_modern_web_is/), justement parce qu'il y a de plus en plus d'images et de vidéos (toutes n'étant pas forcément utiles), sans oublier les publicités.

* Quand on n'a ni la fibre, ni la 4G, c'est lent.
* Même sur les grosses connexion, en vrai, c'est trop lent à mon goût
* Utiliser de la bande passante consomme de l'électricité (qu'il faut produire, potentiellement en polluant).
* GitHub Pages (la plateforme utilisée pour héberger ce site) a des [quotas](https://docs.github.com/en/github/working-with-github-pages/about-github-pages#guidelines-for-using-github-pages) : mon site ne doit pas peser plus d'1 Go, ou consommer plus de 100Go de bande passante par mois.

## Mon site et son impact

Avec le peu de traffic que j'ai, la pollution générée par mon site est faible. Si vraiment je ne voulais pas polluer du tout, je n'aurais pas de site internet, je ne streamerais pas sur [twitch](https://www.twitch.tv/allgeekstudio/), je ne balancerais pas autant de photos et vidéos débiles sur [Twitter](https://twitter.com/AllGeekStudio/status/1298280741936287747), [Facebook](https://www.facebook.com/AllGeekStudio/photos/a.1630812647133065/2617428641804789) ou [Instagram](https://www.instagram.com/p/CDYzNinIQ1W/)...

Je tiens quand-même à ce que mon site soit léger et rapide à charger :

* si mon site était un portfolio de photographe, on pourrait s'attendre à ce qu'il mette du temps à chareger les médias
* mon site est simple, il contient surtout du texte : s'il est lent, c'est donc un peu la honte.

Autrement dit, c'est surtout une question de fierté : alors que la mode est à pousser du contenu sans se soucier de la bande passante, j'essaie de faire un site cohérent, pas trop moche, et pas trop long à charger.

### Comment je fais

* Déjà, j'utilise un site statique. Je ne suis pas allé chercher bien loin : un jour, j'ai entendu parler de github pages (probablement via [Hacker News](https://news.ycombinator.com/)) et de Jekyll, et j'ai eu envie de jouer avec. En bref : quand vous naviguez sur mon site, vous tombez directement sur des pages HTML : sans equêtes SQL pour lire des données, et sans code PHP, Java ou autre pour générer des pages, on gagne du temps. Bones : je réduis les vecteurs d'attaque sur mon site (je n'ai pas de backend [WordPress](https://www.zdnet.fr/actualites/une-faille-tres-exploitee-du-plugin-wordpress-file-manager-affecte-des-sites-web-39908975.htm) à hacker, par exemple)
* J'utilise peu de Javascript. J'ai bien un script Google Analytics, parce que ... bon, en vrai je m'en sers pas vraiment. J'aime savoir d'où viennent mes visiteurs, à peu près, mais je ne fais absolument rien de cette information.
* Mes images compressées sont fortement compressée (je me sers beaucoup de [ce site](https://compresspng.com/))

résultat : mes pages font entre 239 kB et 674 kB (mon plus gros article plein d'images : < 1 Méga octet)

insérer capture de l'inspecteur Chrome : onglet network.