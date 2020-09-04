---
layout: post
title: Un site basique - pourquoi ?
---

## tl;dr
Pourquoi mon site est-il si basique ? Je pourrais m'inspirer des [templates de SquareSpace](https://fr.squarespace.com/modeles) : beaucoup de photos et d'animations, ça en jette. Et pourtant, j'ai choisi de faire autrement, et pas uniquement parce que je suis fainéant.

## Toujours Plus

D'autres que moi l'ont constaté : malgré nos connexions de plus en plus rapides, [les sites internets modernes sont lents](https://www.reddit.com/r/technology/comments/3z6gwy/the_website_obesity_crisis_why_the_modern_web_is/), justement parce qu'il y a de plus en plus d'images et de vidéos (toutes n'étant pas forcément utiles), sans oublier les publicités.

* Quand on n'a ni la fibre, ni la 4G, c'est lent.
* Même sur les grosses connexion, en vrai, c'est trop lent à mon goût
* Utiliser de la bande passante consomme de l'électricité, qu'il faut produire parfois en polluant.
* GitHub Pages (la plateforme utilisée pour héberger ce site) a des [quotas](https://docs.github.com/en/github/working-with-github-pages/about-github-pages#guidelines-for-using-github-pages) : mon site ne doit pas peser plus d'1 Go, ou consommer plus de 100Go de bande passante par mois.

## Mon site et son impact

### Relativiser

Avec le peu de traffic que j'ai, la pollution générée par mon site est faible. Si vraiment je ne voulais pas polluer du tout, je n'aurais pas de site internet, je ne streamerais pas sur [twitch](https://www.twitch.tv/allgeekstudio/), je ne balancerais pas de vidéos débiles sur [Twitter](https://twitter.com/AllGeekStudio/status/1298280741936287747), Facebook ou Instagram... TODO : ajouter des liens vers des médias

### La bande passante

* si mon site est un portfolio de photographe ultra classe, on s'attend à ce qu'il consomme
* mon site est simple : surtout du texte : s'il est lent, c'est un peu la honte.

Autrement dit, c'est surtout une question de fierté : alors que la mode est à "je pousse du contenu sans me soucier de la bande passante", j'essaie de faire un site cohérent, pas trop moche, et pas trop gros à charger.

### Comment je fais

* Site statique. Je ne suis pas allé chercher bien loin : un jour, j'ai entendu parler de github pages (probablement via hackernews) et de Jekyll -> banco. Bonus : pas de backend wordpress à hacker
* peu de JS. Analytics, parce que ... bon, en vrai je m'en sers pas. J'aime savoir d'où viennent mes visiteur, à peu près, mais je ne fais absolument rien de cette info
* images compressées

résultat : mes pages font entre x et y kB (mon plus gors article plein d'images : < 1 Méga octet)

insérer capture de l'inspecteur Chrome : onglet network.