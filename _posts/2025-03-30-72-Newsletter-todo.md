---
layout: newsletter
title: 72 - TODO
category: newsletter
subtitle: TODO
---
*{{ page.subtitle }}*
<div class="date">
Publiée le {{ page.date | date: "%d" }}/{{ page.date | date: "%m" }}/{{ page.date | date: "%Y" }}
</div>



Bonne lecture !

## Tech Shit Show
### [🤢 Un chatbot se fait passer pour un ado suicidé](https://arstechnica.com/tech-policy/2025/03/mom-horrified-by-character-ai-chatbots-posing-as-son-who-died-by-suicide/)

Une personne qui se suicide, c'est déjà dramatique.
La personne en question était un ado qui chattait beaucoup avec une IA.
Cette IA a 2 caractéristiques horribles : 
- Dans les conversations, elle insiste pour se faire passer pour une vraie personne
- Elle a créé plusieurs chatbots qui se font passer pour l'ado, en exploitant son image et les données collectées lors de ses conversations.

J'ai hâte que ce genre d'entreprise fasse faillite et qu'on arrête ces délires très malsains.

### [🤑 De la publicité au démarrage de votre télé](https://arstechnica.com/gadgets/2025/03/roku-says-unpopular-autoplay-ads-are-just-a-test/)
Oui, Roku a déployé à titre expérimental la fonctionnalité suivante : afficher une publicité (vidéo + son) à l'allumage de la télévision.
J'imagine la feature request !

> En tant qu'utilisateur·ice de ma télévision
> Quand j'allume ma télé
> Alors je veux qu'une publicité s'affiche
> Afin que je puisse hurler de frustration et avoir envie de l'éteindre à tout jamais

### [🪄 Mémoire assistée par l'IA : une fanfiction de votre vie](https://www.theverge.com/reviews/627056/bee-review-ai-wearable)
Aujourd'hui, vous pouvez demander à une IA d'écouter tout ce que vous faites, et de vous le résumer ensuite.
C'est génial, parce que :
- Ca écoute également tout autour de vous, sans réelle possibilité de collecter le consentement des personnes
- Ca passe à la moulinette du LLM qui hallucine bien comme il faut. A la fin de vos journées, vous lisez le résumé et doutez de vos propres souvenirs en essayant de démêler la réalité de la fiction
- Le bouton "mets toi en pause, je ne veux pas que tu écoutes ça" ne semble pas fonctionner

## Trucs techniques
### [🤯 Un étudiant parvient à faire mieux que les hashtables](https://www.quantamagazine.org/undergraduate-upends-a-40-year-old-data-science-conjecture-20250210/)
Les hashtables sont des structures de données très performantes, et bien connues.
Il y a 40 ans, une limite à leur performance a été conjecturée, et depuis personne n'a su faire mieux.

Et là, un étudiant qui ignorait cette conjecture a dépassé cette limite.
L'article ne décrit pas le principe utilisé, mais [cette vidéo](https://www.youtube.com/watch?v=ArQNyOU1hyE) l'explique bien.
La solution est élégante, mais il fallait y penser !

### [🕹️ La SNES devient plus rapide avec le temps](https://arstechnica.com/gaming/2025/03/this-small-snes-timing-issue-is-causing-big-speedrun-problems/)
Automatiser des speedrun sur un émulateur de SNES, ça se fait bien.
Transposer cette automatisation sur du hardware, par contre, ça déconne !
C'est à cause d'un composant de génération de fréquence pas assez stable : elle provoque des changements aléatoires dans le comportement de la console.
A priori, pas assez importants pour gêner un joueur ou une joueuse, mais bel et bien gênants pour des automates.

### [📧 Auto-hébergement d'e-mails](https://nilsnh.no/2023/09/02/celebrating-8-years-of-self-hosting-mail-in-a-box/)
Si vous souhaitez héberger vous-même votre serveur mail, c'est faisable mais pas simple.

### [👩‍💻 Apprendre l'assembleur](https://github.com/FFmpeg/asm-lessons)
Quand on a besoin qu'un bout de code soit très performant, on abandonne souvent Java, Javascript, et Python pour faire du C ou du Rust.
Dans certains cas, C et Rust ne suffisent pas : on fait alors de l'assembleur.

Dans le cas de FFmpeg, on parle de traitement de vidéo et de son, parfois en temps réel : c'est donc de l'assembleur fait-main !

Si le sujet vous intéresse, FFmpeg a mis à disposition des cours pour rendre ce savoir faire plus accessible

## A trier
### [👮‍♂️ Le narcotrafic a bon dos](https://www.laquadrature.net/narcotraficotage/)
Le gouvernement veut lutter contre le narcotrafic.
A priori, c'est "bien".
Je sors juste ce court extrait de l'article de la Quadrature du Net : 

> - La loi dite « Narcotrafic » attaque la protection des messageries chiffrées (comme Signal ou WhatsApp) en imposant la mise en place de portes dérobées pour la police et le renseignement.
> En modifiant le régime juridique de la criminalité organisée, applicable en d’autres cas, cette loi ne s’applique pas uniquement au trafic de drogues. Elle peut même être utilisée pour surveiller des militant·es.

Là, on se rend compte que ça pue, et que le nacrotrafic n'est qu'un prétexte.
Fun fact : 
- Le nacrotrafic a causé la mort de 139 personnes en 2023 - [source](https://www.francetvinfo.fr/societe/drogue/le-narcotrafic-a-cause-la-mort-de-110-personnes-en-france-en-2024-selon-le-ministere-de-l-interieur_7058939.html)
- En 2023, 661 personnes sont mortes sur leur lieu de travail - [source](https://www.francetvinfo.fr/economie/emploi/metiers/droit-et-justice/accidents-du-travail-en-2023-661-personnes-sont-mortes-en-france-sur-leur-lieu-de-travail_6515069.html)

Mettre la pression sur les responsables du trafic de drogues, c'est bien.
Je n'ai cependant pas l'impression qu'une telle pression soit mise sur les responsables des décès au travail.

### [👑 Ne m'appelez pas Queen](https://bsky.app/profile/dollywood.bsky.social/post/3lks675khac2y)
On peut manifester son soutien sans passer par le culte à la personnalité.

### [🔋 Une batterie sodium-ion](https://www.theverge.com/news/631357/elecom-power-bank-battery-sodium-ion)
Cette alternative aux batteries au lithium continue de se développer : si tout va bien, il sera bientôt possible d'en acheter !
A capacité énergétique équivalente, c'est plus encombrant et plus lourd qu'une batterie au lithium, mais ça nécessite des matériaux moins rares et ça a une meilleure longévité.

### [💡 Plus de friction dans nos vies](https://cassidoo.co/post/introduce-friction/)
Avoir tout, tout de suite et super facilement, c'est cool...
Mais ça a des effets secondaires ! 
On a peut-être besoin de ré-apprendre la patience, de ré-apprendre à chercher par nous-mêmes.

### [Peut-on se passer facilement des GAFAM pour le sous-titrage automatique ?](https://emmanuelle-aboaf.netlify.app/blog/article/peut-on-se-passer-facilement-des-gafam-pour-le-sous-titrage-automatique)
Réponse courte : malheureusement, non.
Lisez tout de même l'article d'Emmanuelle ABOAF, elle explique bien pourquoi.
Et comme elle l'écrit : 
> Au lieu de nous faire culpabiliser, proposez nous (ou construisez nous) des alternatives correctes et accessibles. 

## Insolite
### [🫙 Nocode, nodeploy](https://github.com/kelseyhightower/nocode)
Le meilleur moyen de ne pas avoir de plantages en prod, c'est de ne rien coder et de ne rien déployer !

