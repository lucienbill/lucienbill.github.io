---
layout: post
title: Un site basique - pourquoi ?
---

Pourquoi mon site est-il si basique ? Je pourrais m'inspirer des [templates de SquareSpace](https://fr.squarespace.com/modeles) : beaucoup de photos et d'animations, ça en jette. J'ai pourtant choisi de faire autrement, et pas uniquement parce que je suis fainéant.

## Toujours Plus

D'autres que moi l'ont constaté : malgré nos connexions de plus en plus rapides, [les sites internets modernes sont lents](https://www.reddit.com/r/technology/comments/3z6gwy/the_website_obesity_crisis_why_the_modern_web_is/), justement parce qu'il y a de plus en plus d'images et de vidéos (toutes n'étant pas forcément utiles), sans oublier les publicités.

* Quand on n'a ni la fibre, ni la 4G, c'est lent.
* Même sur les grosses connexions, en vrai, c'est trop lent à mon goût.
* Utiliser de la bande passante consomme de l'électricité (qu'il faut produire, potentiellement en polluant).
* GitHub Pages (la plateforme utilisée pour héberger ce site) a des [quotas](https://docs.github.com/en/github/working-with-github-pages/about-github-pages#guidelines-for-using-github-pages) : mon site ne doit pas peser plus d'1 Go, ou consommer plus de 100Go de bande passante par mois.

## Mon site et son impact

Avec le peu de traffic que je génère, la pollution liée à mon site est faible. Si vraiment je ne voulais pas polluer du tout, je n'aurais pas de site internet, je ne streamerais pas sur [twitch](https://www.twitch.tv/allgeekstudio/), je ne balancerais pas autant de photos et vidéos débiles sur [Twitter](https://twitter.com/AllGeekStudio/status/1298280741936287747), [Facebook](https://www.facebook.com/AllGeekStudio/photos/a.1630812647133065/2617428641804789) ou [Instagram](https://www.instagram.com/p/CDYzNinIQ1W/)...

Je tiens quand-même à ce que mon site soit léger et rapide à charger :

* Si mon site était un portfolio de photographe, on pourrait s'attendre à ce qu'il mette du temps à afficher des médias de haute qualité.
* Mon site est simple, il contient surtout du texte : s'il est lent, c'est donc un peu naze.

Autrement dit, il s'agit surtout d'une question de fierté : alors que la mode est à pousser du contenu sans se soucier de la bande passante, j'essaie de faire un site cohérent, pas trop moche, et pas trop long à charger.

### Comment je fais

Déjà, j'utilise un site statique. Je ne suis pas allé chercher bien loin : un jour, j'ai entendu parler de [GitHub Pages](https://pages.github.com/) (probablement via [Hacker News](https://news.ycombinator.com/)) et de Jekyll, et j'ai eu envie de jouer avec.
En bref : quand vous naviguez sur mon site, vous tombez directement sur des pages HTML. Sans requête SQL pour lire des données, et sans code à exécuter pour générer des pages à la demande, on gagne du temps.
Bonus : je réduis les vecteurs d'attaque sur mon site (je n'ai pas de backend [WordPress](https://www.zdnet.fr/actualites/une-faille-tres-exploitee-du-plugin-wordpress-file-manager-affecte-des-sites-web-39908975.htm) à hacker, par exemple).

J'utilise également peu de Javascript.
J'ai bien un script Google Analytics qui traîne, parce que j'aime savoir d'où viennent mes visiteurs...
Mais très honnêtement, je ne fais absolument rien de constructif à partir de cette information.

Enfin, mes images sont fortement compressées (je me sers beaucoup de [ce site](https://compresspng.com/)).

Résultat : mes pages pèsent entre 239 kB et 674 kB :

![Image de l'inspecteur Chrome : la plus grosse page pèse 674 kilooctets](/images/posts_data/chr-inspector-network.png)

### A vous de jouer !

Maintenant que vous savez comment créer un site léger, je vous encourage à le faire également !
Invitez vos collègues, votre famille, vos amis à faire de même, et avec vos camarades de jeu, vous pourrez comparer la taille de vos sites (faites tout de même attention aux fautes de frappe).
