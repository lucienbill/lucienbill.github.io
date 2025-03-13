---
layout: newsletter
title: 71 - Le Problème avec Substack
category: newsletter
subtitle: C'est gratuit, mais à quel prix ?
---
*{{ page.subtitle }}*
<div class="date">
Publiée le {{ page.date | date: "%d" }}/{{ page.date | date: "%m" }}/{{ page.date | date: "%Y" }}
</div>

J'ai déjà changé 3 fois de service de newsletter depuis le 30 juin 2021, j'espère que la 4ème sera la bonne avant un moment.

J'ai des pistes, et j'ai même ajouté une section [newsletter](https://www.lucienbill.fr/newsletter/) à mon site perso, afin d'un peu reprendre le contrôle de mes archives. Un effet de bord sympa est qu'il est maintenant possible d'utiliser un lecteur de flux RSS pour s'abonner : autrement dit, je n'ai même plus besoin de connaître vos adresses e-mail ! 

Bien sûr, ça complique le suivi de *"quels liens sont cliqués ? A quel point mon contenu est-il lu ?"*, des questions auxquelles ma réponse est en général *"je m'en fiche, je ne regarde quasiment pas ces statistiques, et concrètement je n'en fais rien du tout"*.

Le *"pourquoi"* de ma décision de quitter Substack est détaillé plus bas, et le *"quand"* sera *"bientôt"*, j'ai quelques sujets administratifs à gérer d'abord. 

Bonne lecture !

## Social Tech
### [❤️ La Première Ligne](https://lapremiereligne.fr/editions/mars-2025) 
Pour les 1 an de la première ligne, une flopée d'articles ont été publiés ! 
Je vous les recommande, j'ai trouvé le texte d'Emmanuelle Aboaf particulièrement intéressant, sur la façon dont l'administration Trump s'attaque directement aux handicapé·es.

### [📝 Le blog de Tamara sur l'accessibilité numérique](https://www.iamtamara.design/fr/blog) 
Encore du bon contenu sur l'accessibilité numérique, avec un design super chouette. 

Rappel : quand une boîte laisse l'accessibilité pour *"plus tard"* (ce plus tard qui arrive jamais), c'est un choix politique. Ça signifie : nous, qui développons l'appli, sommes valides donc on s'en fiche, ça marche pour nous. C'est une démarche d'exclusion.

## Tech Shit Show

### [🛑 Google Chrome met des bâtons dans les roues à UBlock Origin](https://news.ycombinator.com/item?id=43322922)
Quelle surprise : Google ne veut pas laisser ce bloqueur de publicités tranquille !

Dans le fil de discussion sur HackerNews, plusieurs alternatives sont évoquées :
- Unblock Lite, moins puissant mais semble faire une bonne partie du boulot. Il paraît que la version Lite ne bloque pas les requêtes réseau, seulement l'affichage, mais je ne parviens pas à trouver de source qui me semble sûre à ce sujet. 
- Brave, le navigateur dont le CEO a donné 1000$ a une campagne politique visant à bannir le marriage gay en Californie. 
- Firefox, qui a récemment mis à jour ses CGU avec des termes douteux (même si Mozzilla affirme que [non en fait c'est cool](https://techcrunch.com/2025/02/28/mozilla-responds-to-backlash-over-new-terms-saying-its-not-using-peoples-data-for-ai/))

Bref, le meilleur choix est probablement de se débarrasser le plus possible de Chrome, je pense que Mozzilla est plus susceptible que Google de rectifier le tir quand les personnes râlent. 

### [🫠 Substack laisse les nazis s'exprimer](https://www.platformer.news/why-platformer-is-leaving-substack/)

> "it was about whether Substack would publicly commit to proactively removing pro-Nazi material. \[...\] I believed that the company planned to do this. But I no longer do."

C'est la raison principale pour laquelle je veux changer de plate-forme pour ma newsletter. Je pense que je vais tester infomaniak, qui me semble pas cher et suffirait pour mon besoin. 

### [🤖 L'aire impériale de l'IA](https://www.bloodinthemachine.com/p/ai-is-in-its-empire-era)
Les années précédentes, le sommet de l'IA abordait les thèmes de la sécurité et des risques.
Cette année, JD Vance (un des fascistes du gouvernement américain) a donné un discours techno-impérialiste, franchement agressif :
> "The Trump administration will ensure that the most powerful AI systems are built in the U.S. with American design"
> \[...\]
> "The AI future is not going to be won by hand-wringing about safety [...]"

Bref, une direction où l'éthique est 100% absente.

## Trucs techniques

### [✅ Les Tests de SQLite](https://www.sqlite.com/testing.html) 
J'ai lu les transcriptions de quelques interviews du créateur de SQLite, et une des infos que je retiens est : les devs passent plus de temps à tester qu'à coder l'appli. 

Parce qu'il n'y a qu'une seule façon de s'assurer qu'un programme fonctionne comme il le devrait : tester. 

Pour SQLite, ça va très loin : des milliards de tests exécutés, 100% de couverture des branches au niveau du *bytecode* (pas juste au niveau du code source), du fuzz testing, des déploiements sur plein de hardware différents... 

Je vais très certainement me servir de cette référence pour tenter de convaincre des DSI de faire revoir leur organisation, surtout quand cette organisation est :
- avoir 2 testeur·ses pour 12 développeur·ses, réparti·es sur 5 produits différents.
- passer beaucoup moins de temps à tester qu'à développer

Tester est souvent vu comme un coût : c'est vrai, mais c'est oublier que la non-qualité a aussi un coût, qui est à mon humble avis plus élevé.

### [🧾 Linux à ses débuts](https://lwn.net/Articles/928581/)
> "I'm doing a (free) operating system (just a hobby, won't be big and professional like gnu)"

En me plongeant dans l'histoire de SQLite, j'ai inévitablement fini par me plonger dans celle de Linux.
Parce que ces 2 projets ont quelque chose en commun : pour chacun d'entre eux, un système de gestion de version de code source a été spécialement conçu. Git pour Linux, et Fossil pour SQLite.
Les 2 pour la même raison : le développeur principal du projet ne trouvait pas ce qu'il voulait dans ce qui existait, alors il a codé son truc.

### [🦴 Fossil, le gestionnaire de code source](https://www.fossil-scm.org/home/doc/trunk/www/fossil-v-git.wiki)
Tant qu'à faire, autant se pencher également sur Fossil et ses différences par rapport à git.

Je ne pense pas que je vais forcément essayer Fossil, mais le comparatif reste intéressant : les *"pourquoi"* des différences sont bien expliqués.
Fossil a de sérieux points forts : 
- Les infos des commits sont dans une base de données SQL, ça facilite certaines recherches
- La philosophie est que l'historique des commits doit refléter ce qui a vraiment été fait, pas ce qui aurait du être fait (autrement dit : pas de "rebase")

### [🦊 Firefox sync à héberger soi-même](https://blog.diego.dev/posts/firefox-sync-server/)
C'est faisable mais ça a quand même l'air très chiant à mettre en place.

### [🧑‍💻 Ré-écrire les paquets essentiels de Linux en Rust](https://news.ycombinator.com/item?id=43311149)
Ca a l'air technique, et ça l'est. Mais je pense que l'aspect "licences" est bien plus intéressant, et c'est ce qui ressort des discussions autour de l'article : tandis que les paquets de Linux sont sous licence GPL V2, les clones en Rust sont sous licenses MIT.
Un résumé grossier serait : 
- Quand c'est GPL V2, c'est open source. Si on embarque le logiciel dans un autre, l'autre logiciel devient aussi licencé GPL V2, donc open source aussi.
- La licence MIT n'impose pas cette restriction : n'importe quelle entreprise va donc pouvoir en dériver un produit dont le code est propriétaire

C'est un peu plus subtil que ça, sinon les licences seraient pas aussi longues à lire, et je n'ai pas encore tout à fait les réponses à toutes mes questions, telles que : 
- Si mon logiciel est licencé GPL V2, est-ce que je peux dire *"vous avez accès au code source, par contre pour l'utiliser il faut payer une licence"*?
- GPL V2 ou V3, quelles sont les différences ?

En tout cas pour les composants de Linux, je ne suis pas certain que laisser la porte ouverte aux portes fermées soit une bonne idée.

Côté technique, le projet me semble d'une pertinence floue également, surtout quand je lis ça :
> There are between 200 and 300 dependencies in the uutils project. \[Ledru\] said that he understood there is always a supply-chain-attack risk, "but that's a risk we are willing to take".

Bref, la gestion des risques n'est à mon avis pas du tout au point.

## Trucs moins technique

### [🤑 Obsidian est 100% gratuit](https://obsidian.md/blog/free-for-work/)
Etape 1 : mon département IT m'autorise à commander une license Obsidian pour le travail, $50/an

Etape 2 : quelques jours plus tard, ça devient gratuit !

Bref, je vous le recommande, pour toutes ces raisons :
- Vos notes seront en Markdown, donc si un jour Obsidian disparaît, vous aurez tout de même de quoi bosser
- Facile à crypter : un coffre VeraCrypt, et le tour est joué
- Vous pouvez gérer vos notes 100% localement, ou synchroniser avec le cloud de votre choix (un OneDrive, par exemple)

Et j'aime l'utiliser avec les outils suivants :
- La méthode PARA pour gérer ma base de connaissance
- [Mon outillage de prise de notes quotidiennes](https://github.com/lucienbill/obsidian-daily-notes/blob/main/fr-FR/README.md), open source et donc adaptable

### [📺 Diffuser des publicités sur Twitch](https://www.youtube.com/shorts/QUOMeiMEQxs?si=j-QXHDcgf01W-OOW)
Astuce contre-intuitive : diffuser des publicités sur Twitch peut aider à attirer du public.
Précisément : quand vous diffusez plus de 3 minutes de publicité par heure, Twitch désactive les "pre-roll", ces publicités qui vous empêchent de regarder directement un stream quand vous arrivez dessus.

En désactivant les pre-roll, les personnes qui découvrent votre stream vous voient, directement, plutôt que de devoir se farcir une pub qui ne pourra pas être zappée, et de partir voir ailleurs.

## Insolite
### [🔥 Doom dans un PDF](https://github.com/doom-pdf/)
Personne n'en rêvait, c'est pourtant fait : Doom tourne dans un PDF !
La vraie question est : le format PDF, censé servir à sauvegarder des documents, a-t-il vraiment besoin d'être Turing complete ?
