---
layout: newsletter
title: 77 - Salut, ça gaze ?
category: newsletter
subtitle: Une rentrée sous lacrymo, c'est émouvant. J'en pleurerais presque
---
*{{ page.subtitle }}*
<div class="date">
Publiée le {{ page.date | date: "%d" }}/{{ page.date | date: "%m" }}/{{ page.date | date: "%Y" }}
</div>

Coucou ! 

C'est la rentrée, les jours raccourcissent, la pluie arrive, les élèves vont à l'école... 
Et respirent leurs premières lacrymos, c'est si beau la nature.

En attendant un avenir meilleur sans Emmanuel Macron, je vous propose quelques news.

Bonne lecture !

## Trucs techniques
### [TDD : Type Driven Development](https://cltdl.fr/me/talks#tdd-as-in-typedriven-development)
Ce talk est technique, je ne prétendrais pas avoir tout compris.
Mais retenez ceci : typer vos variables, vos paramètres et vos retours de fonctions peut vous aider à coder des programmes plus robustes.

Je code essentiellement des scripts d'automatisation de tests fonctionnels, et depuis que je mets en place du typage j'ai l'impression que c'est plus facile.

Note : je ne suis pas encore prêt à renoncer aux levées d'exceptions : elles me sont aujourd'hui très utiles.

### [Git Exclude](https://marijkeluttekes.dev/blog/articles/2025/09/03/git-exclude-a-handy-feature-you-might-not-know-about/)
C'est comme git ignore, mais en différent.

### [HTTPS expliqué simplement](https://www.linkedin.com/posts/lorelei-moutiez_nouveau-format-1-minute-pour-comprendre-activity-7368918880670486528-L7vD/)
J'ai rarement vu une explication aussi courte et aussi claire de ce concept.

### [Une critique de GO](https://blog.habets.se/2025/07/Go-is-still-not-good.html)
L'auteur trouve que Go c'est vraiment naze.

Je ne connais pas assez Go, mais certains des problèmes techniques qui sont décrits sont gênants.

Ceci dit, j'aime utiliser JavaScript, qui est pourtant connu pour avoir plein de problèmes. 
Si, malgré les défauts d'un langage, je parviens à en faire quelque chose qui est utile sans que ce soit une souffrance, ça va.

Chacun·e son truc.

### [Baisser le volume audio progressivement : pas simple pour les CPU](https://www.youtube.com/watch?v=y-NOz94ZEOA&si=NRJTX0J93kB0Tevx)
Baisser le volume d'une piste audio progressivement, dans le monde analogique c'est assez direct.

Dans le monde des 0 et des 1, c'est plus subtil : selon l'approche choisie, on peut mettre à genoux un processeur !

Je suis tombé sur cette vidéo par hasard (probablement parce que YouTube a compris que j'étais un nerd et un passionné de son) : je vous encourage à parcourir les autres sujets proposés par Laura Wired, c'est très bien produit. 

## Para technique
### [La dyslexie dans la tech](https://lobste.rs/s/l1srln/dyslexic_people_working_tech_industry)
La dyslexie, ça n'affecte pas que la lecture et l'écriture de textes.
Ca peut aussi affecter la façon dont la mémoire fonctionne, et c'est un sérieux désavantage quand on essaie de passer un entretien de recrutement.

## Cybersécurité
### [npm : on a esquivé le pire](https://xeiaso.net/notes/2025/we-dodged-a-bullet/)
Des paquets très populaires sur npm ont été piratés, grâce à une campagne de phishing très bien élaborée.
Grace à cet article partagé par [Charlie](https://bsky.app/profile/did:plc:ztefgrqcj46xm3pvpuocapwh) sur un discord, j'ai enfin compris ce qu'il s'était passé.

L'attaque ciblait uniquement les crypto-monnaies, donc son impact est relativement limité : c'est juste un coup de bol ! 

Si vous avez un bot qui met à jour automatiquement vos dépendances dès qu'une nouvelle version d'une librairie sort, désactivez-le parce que c'est une très mauvaise idée.

### [Faux entretien, vrai vol de données](https://www.linkedin.com/posts/oliviercroisier_alerte-s%C3%A9curit%C3%A9-je-viens-d%C3%AAtre-victime-activity-7369019651550396416-pxRk)
Bon à savoir : sur LinkedIn, certains entretiens d'embauche cachent des arnaques.
Ce témoignage donne quelques points à identifier pour les repérer.

## Tech shit show
### [L'escroquerie dans le streaming musical](https://www.youtube.com/watch?v=plleJ0Zv0Ww)
Les côtés sombres de Spotify commencent à faire surface.
Entre autres : [la controverse sur les faux artistes](https://en.m.wikipedia.org/wiki/Controversy_over_fake_artists_on_Spotify) et [un soutien à l'extrême droite](https://www.lesinrocks.com/musique/investiture-de-donald-trump-spotify-a-fait-don-de-150-000-dollars-pour-la-ceremonie-649529-23-01-2025/).

Au-delà de ces sérieux problèmes chez un acteur majeur du streaming, l'écosystème en entier a son lot de couacs.
Dans cette vidéo, j'ai découvert qu'il était très facile de copyrighter des œuvres qui ne nous appartiennent pas : on peut avec un effort minime monter ce type de fraude, et les artistes concerné·es doivent déployer des efforts plus conséquents pour lutter contre.

C'est un exemple parmi d'autre : lors de la conception des diverses plateformes de distribution de musiques, les cas d'abus du système ont manifestement été oubliés.

### [La controverse autour de Luc Julia sur l’intelligence artificielle](https://www.afis.org/La-controverse-autour-de-Luc-Julia-sur-l-intelligence-artificielle)
Aujourd'hui, la légitimité de Luc Julia est remise en question : cet article creuse le sujet.

Mon avis sur l'IA reste inchangé : 
- C'est artificiel mais pas intelligent.
- Ca peut être utile mais ce n'est pas magique.
- Il faut résoudre les manquements éthiques graves de ce domaine (l'entraînement sur des données volées, l'apprentissage du bien et du mal qui se fait en broyant la santé mentale des Kenyan·es, et l'impact environnemental désastreux des fermes de serveurs IA)

La critique sur l'IA est nécessaire, mais il est intéressant de rappeler que ce n'est pas parce qu'une personne est placée en figure d'autorité sur un sujet qu'elle a forcément raison.

Comme dirait Magali Milbergue : [burn your idols](https://shows.acast.com/burn-your-idols)

### [Le jour où ma vie pro a failli changer (et c’était mercredi)](https://blog.zwindler.fr/2023/11/19/jour-vie-pro-failli-changer/)
Zwindler nous partage un process de recrutement qui a merdé : côté opérationnel tout allait bien, mais un couac juridique a tout fait capoter.

Il l'a récemment mis à jour pour ajouter le nom de l'entreprise concernée : Gitlab.
Je pense que cela montre que ce type de plantage peut arriver à n'importe quelle entreprise, mêmes à des entités à priori bien établies.

### [Tesla ment sur les données ?](https://arstechnica.com/cars/2025/08/how-a-hacker-helped-win-a-wrongful-death-lawsuit-against-tesla/)
Un accident mortel impliquant une Tesla et un piéton, ça arrive.

Les Tesla sont bourrées de capteurs, et pour cet accident, Tesla affirmait avoir totalement perdu les données à cause de mauvaises pratiques de sauvegardes.

Une tierce personne est parvenue à récupérer ces données : soit Tesla gère mal ses données et c'est inquiétant, soit Tesla ment et c'est pire.

## Vive la France
### [Des lacrymos devant une école](https://www.humanite.fr/politique/bruno-retailleau/10-septembre-le-gouvernement-mobilise-matraques-et-des-lacrymos-contre-la-colere-sociale)
Elisabeth Borne a dit : 

> Il faut se préparer, très jeune, enfin dès le départ, presque depuis la maternelle à réfléchir à la façon dont on se projette dans une formation et dans un métier demain

Intimer les françaises et les français à réfléchir de plus en plus tôt, c'est dangereux : on risque de se rendre compte bien plus jeune que les turbo-centristes nous projettent à très grande vitesse dans la fange, avec "*larbin·e pour ultra riche*" comme seule perspective professionnelle. 

Est-ce la peur d'une prise de conscience citoyenne précoce, ou la jalousie de la capacité à réfléchir, qui a poussé ces policiers à lâcher [des lacrymo sur des maternelles](https://www.youtube.com/shorts/Da4z_wo4CSc) ce 10 septembre ?

### [Observatoire de l'extrême droite](https://4ngsg.r.ah.d.sendibm5.com/mk/mr/sh/1t6AVsd2XFnIGDUrrunSGBxJAYl81i/ULoVyW-pUh1o)
Le média Street Press surveille ce qu'il se passe chez l'extrême droite.

A propos de notre ancien premier ministre et du nouveau : 
 
> Décembre 2024, Marine Le Pen avait rappelé quelles étaient ses préférences pour Matignon : Bayrou ou Lecornu. Ça sera l’un puis l’autre. Depuis des mois, le second soigne ses relations avec le parti d’extrême droite. Il se garde de jeter le moindre anathème moral en public. Et en privé, pousse l’élégance (ou le vice) jusqu’à convier à dîner Le Pen et Bardella. 

Je pose ça là, pour celles et ceux qui se demandaient encore si Macron était d'extrême droite ou pas.

## Insolite
### [Dino Runner](https://dinorunner.com/)
J'aime bien le jeu que Chrome affiche quand il n'a pas internet, mais j'utilise principalement Firefox.
Heureusement, je n'ai pas besoin de Chrome pour y jouer !